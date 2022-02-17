from rest_framework import viewsets

from main.models import ProductPages, Blocks, Pages, BlockImages, Image
from main.models.products import *
from main.serializers.products import ProductsCategoryListSerializers, ProductsCategoryRetrieveSerializers, \
    ProductSerializer, ProductPagesSerializer, BlocksSerializers, BlocksPolymorphicSerializers


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
#     lookup_field = 'slug'


class BlocksPagesViewSet(viewsets.ModelViewSet):
    queryset = Blocks.objects.all()
    serializer_class = BlocksPolymorphicSerializers

    def get_queryset(self):
        queryset = Blocks.objects.filter(page_id=[*self.kwargs.values()][0])
        return queryset
