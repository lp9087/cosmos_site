from rest_framework import serializers
from main.models.products import ProductCategories, Products, Advantages


class AdvantageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Advantages
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    advantages = AdvantageSerializer(read_only=True, many=True)

    class Meta:
        model = Products
        fields = ['id', 'title', 'developer', 'version', 'advantages']


class ProductsCategoryRetrieveSerializers(serializers.ModelSerializer):
    products = ProductSerializer(read_only=True, many=True)

    class Meta:
        model = ProductCategories
        fields = '__all__'


class ProductsCategoryListSerializers(serializers.ModelSerializer):

    class Meta:
        model = ProductCategories
        fields = ('id', 'title', 'image')
