from rest_framework import serializers
from main.models import Services


class ServicesSerializer(serializers.Serializer):
    class Meta:
        model = Services
        fields = '__all__'
