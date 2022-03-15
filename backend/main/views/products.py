import urllib

from django.http import FileResponse
from rest_framework import viewsets
from rest_framework.decorators import action

from main.models.products import *
from main.serializers.products import ProductsCategoryListSerializers, ProductsCategoryRetrieveSerializers, \
    ProductListSerializer, ProductRetrieveSerializer, ProductFileSerializer


class ProductCategoriesViewSet(viewsets.ModelViewSet):
    serializers = {
        'list': ProductsCategoryListSerializers,
        'retrieve': ProductsCategoryRetrieveSerializers,
        'default': ProductsCategoryRetrieveSerializers
    }
    queryset = ProductCategories.objects.all()

    def get_serializer_class(self):
        return self.serializers.get(self.action,
                                    self.serializers['default'])


class ProductsViewSet(viewsets.ModelViewSet):
    serializers = {
        'list': ProductListSerializer,
        'retrieve': ProductRetrieveSerializer,
        'default': ProductRetrieveSerializer
    }
    queryset = Products.objects.all()
    lookup_field = 'slug'

    def get_serializer_class(self):
        return self.serializers.get(self.action,
                                    self.serializers['default'])


class FileDownloadView(viewsets.ModelViewSet):
    """
    GET, отображение файла по адресу (api/products/<uuid:products_id>/files/)
    Скачать файл по адресу /api/products/<uuid:products_id>/<int:productfiles_id>/download/
    """
    queryset = ProductFile.objects.all()
    serializer_class = ProductFileSerializer
    http_method_names = ['get', 'head']

    def get_queryset(self):
        queryset = ProductFile.objects.filter(product_id=self.kwargs.get('product_pk'))
        return queryset

    @action(methods=['get'], detail=True)
    def download(self, *args, **kwargs):
        file_handle = self.get_object().file.open()
        file_name = self.get_object().file.name.split('/')[2]
        response = FileResponse(file_handle, content_type='whatever')
        response['Content-Length'] = self.get_object().file.size
        response['Content-Disposition'] = 'attachment; filename="%s"' % urllib.parse.quote(file_name)
        return response
