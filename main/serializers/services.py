from rest_framework import serializers
from main.models import Services, ServicePages


class ServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Services
        fields = '__all__'


class ServicePagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServicePages
        fields = '__all__'
