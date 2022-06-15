from rest_framework import serializers
from rest_polymorphic.serializers import PolymorphicSerializer

from main.models.menu import MenuItems, ProductMenuItems, ServiceMenuItems, CustomPageMenuItems, VacancyMenuItems, \
    NewsMenuItems


class ProductMenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductMenuItems
        fields = ('title', 'priority')


class ServiceMenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceMenuItems
        fields = ('title', 'priority')


class CustomPageMenuItemSerializer(serializers.ModelSerializer):
    page_slug = serializers.SlugField(source='custom_page.slug')

    class Meta:
        model = CustomPageMenuItems
        fields = ('title', 'page_slug', 'priority')


class NewsMenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsMenuItems
        fields = ('title', 'priority')


class VacancyMenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = VacancyMenuItems
        fields = ('title', 'priority')


class MenuItemSerializer(PolymorphicSerializer):
    model_serializer_mapping = {
        ServiceMenuItems: ServiceMenuItemSerializer,
        ProductMenuItems: ProductMenuItemSerializer,
        CustomPageMenuItems: CustomPageMenuItemSerializer,
        NewsMenuItems: NewsMenuItemSerializer,
        VacancyMenuItems: VacancyMenuItemSerializer
    }


