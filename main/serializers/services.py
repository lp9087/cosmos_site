from rest_framework import serializers
from main.models import Services, ServicePages
from main.serializers.products import BlocksPolymorphicSerializers


class ServicePagesSerializer(serializers.ModelSerializer):
    blocks = BlocksPolymorphicSerializers(many=True, read_only=True)

    class Meta:
        model = ServicePages
        fields = '__all__'


class ServicesSerializer(serializers.ModelSerializer):
    service_pages = ServicePagesSerializer(many=True, read_only=True)

    class Meta:
        model = Services
        fields = '__all__'
        lookup_field = 'slug'
        extra_kwargs = {
             'url': {'lookup_field': 'slug'}
        }
