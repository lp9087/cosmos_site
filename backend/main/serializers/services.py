from rest_framework import serializers
from main.models import Services, ServicePages, Pages
from main.serializers.products import BlocksPolymorphicSerializers


class ServicePagesSerializer(serializers.ModelSerializer):
    blocks = BlocksPolymorphicSerializers(many=True, read_only=True)

    class Meta:
        model = ServicePages
        fields = '__all__'


class ServicesListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Services
        fields = ('id', 'title', 'slug', 'image', 'short_description')


class ServicesRetrieveSerializer(serializers.ModelSerializer):
    service_pages = ServicePagesSerializer(many=True, read_only=True)

    class Meta:
        model = Services
        fields = '__all__'
        lookup_fields = 'slug'
        extra_kwargs = {
            'url': {'lookup_field': 'slug'}
        }


class PagesSerializer(serializers.ModelSerializer):
    blocks = BlocksPolymorphicSerializers(many=True, read_only=True)

    class Meta:
        model = Pages
        fields = '__all__'
