from rest_framework import viewsets
from main.models.products import *
from main.serializers.products import ProductsCategoryListSerializers, ProductsCategoryRetrieveSerializers


# class ProductCategoriesViewSet(viewsets.ViewSet):
#     serializers = {
#         'list': ProductsCategoryListSerializers,
#         'retrieve': ProductsCategoryRetrieveSerializers,
#         'default': ProductsCategoryRetrieveSerializers
#     }
#     queryset = ProductCategories.objects.all()
#
#     def get_serializer_class(self):
#         return self.serializers.get(self.action,
#                                     self.serializers['default'])


class ProductCategoriesViewSet(viewsets.ViewSet):
    queryset = ProductCategories.objects.all()
    serializer_class = ProductsCategoryListSerializers