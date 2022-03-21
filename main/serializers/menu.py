from rest_framework import serializers
from rest_polymorphic.serializers import PolymorphicSerializer

from main.models.menu import MenuItems, ProductMenuItems, ServiceMenuItems, CustomPageMenuItems, VacancyMenuItems, \
    NewsMenuItems


class ProductMenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductMenuItems
        fields = ('title',)


class ServiceMenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceMenuItems
        fields = ('title',)


class CustomPageMenuItemSerializer(serializers.ModelSerializer):
    page_slug = serializers.SlugField(source='custom_page.slug')

    class Meta:
        model = CustomPageMenuItems
        fields = ('title', 'page_slug')


class NewsMenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsMenuItems
        fields = ('title',)


class VacancyMenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = VacancyMenuItems
        fields = ('title',)


class MenuItemSerializer(PolymorphicSerializer):
    model_serializer_mapping = {
        ServiceMenuItems: ServiceMenuItemSerializer,
        ProductMenuItems: ProductMenuItemSerializer,
        CustomPageMenuItems: CustomPageMenuItemSerializer,
        NewsMenuItems: NewsMenuItemSerializer,
        VacancyMenuItems: VacancyMenuItemSerializer
    }

