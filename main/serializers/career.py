from rest_framework import serializers

from main.models import Contacts, PartnersTypes, Partners, Vacancy, Resume


class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = "__all__"


class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resume
        fields = "__all__"


class ContactsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contacts
        fields = "__all__"


class PartnersTypesSerializer(serializers.ModelSerializer):
    class Meta:
        model = PartnersTypes
        fields = "__all__"


class PartnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partners
        fields = "__all__"
