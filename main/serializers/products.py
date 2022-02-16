from django.template.defaultfilters import slugify
from rest_framework import serializers

from main.models import ProductPages
from main.models.products import ProductCategories, Products


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


class ProductPagesSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductPages
        fields = '__all__'
        lookup_field = 'slug'
        extra_kwargs = {
            'url': {'lookup_field': 'slug'}

        }
