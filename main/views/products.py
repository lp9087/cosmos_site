from rest_framework import viewsets

from main.models import ProductPages
from main.models.products import *
from main.serializers.products import ProductsCategoryListSerializers, ProductsCategoryRetrieveSerializers, \
    ProductSerializer, ProductPagesSerializer


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
    serializer_class = ProductSerializer
    queryset = Products.objects.all()


class ProductsPagesViewSet(viewsets.ModelViewSet):
    serializer_class = ProductPagesSerializer
    queryset = ProductPages.objects.all()
    lookup_field = 'slug'


