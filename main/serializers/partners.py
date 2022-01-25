from rest_framework import serializers

from main.models import PartnersTypes, Partners


class PartnersTypesSerializer(serializers.ModelSerializer):
    class Meta:
        model = PartnersTypes
        fields = "__all__"


class PartnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partners
        fields = "__all__"
