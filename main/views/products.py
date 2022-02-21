from rest_framework import viewsets

from main.models.products import *
from main.serializers.products import ProductsCategoryListSerializers, ProductsCategoryRetrieveSerializers, \
    ProductListSerializer, ProductRetrieveSerializer


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

