from rest_framework import serializers
from main.models.products import ProductCategories, Products, Services


class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Products
        fields = ['id', 'title', 'developer', 'version', 'categories']


class ProductsCategoryRetrieveSerializers(serializers.ModelSerializer):
    products = ProductSerializer(read_only=True, many=True)

    class Meta:
        model = ProductCategories
        fields = '__all__'


class ProductsCategoryListSerializers(serializers.ModelSerializer):

    class Meta:
        model = ProductCategories
        fields = ('id', 'title', 'image')


class ServicesSerializer(serializers.Serializer):
    class Meta:
        model = Services
        fields = '__all__'
