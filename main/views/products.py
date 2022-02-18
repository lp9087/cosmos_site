from rest_framework import viewsets

from main.models import ProductPages, Blocks
from main.models.products import *
from main.serializers.products import ProductsCategoryListSerializers, ProductsCategoryRetrieveSerializers, \
    ProductSerializer, ProductPagesSerializer, BlocksPolymorphicSerializers


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
    lookup_field = 'slug'


class ProductsPagesViewSet(viewsets.ModelViewSet):
    serializer_class = ProductPagesSerializer
    queryset = ProductPages.objects.all()
    # lookup_field = 'product'

    def get_queryset(self):
        queryset = ProductPages.objects.filter(product_id='e0520feb-0418-46df-9f15-ff15ec530c26')
        print(self.kwargs.get('products__pk'))
        return queryset


class BlocksPagesViewSet(viewsets.ModelViewSet):
    queryset = Blocks.objects.all()
    serializer_class = BlocksPolymorphicSerializers

    def get_queryset(self):
        queryset = Blocks.objects.filter(page_id=[*self.kwargs.values()][0])
        return queryset
