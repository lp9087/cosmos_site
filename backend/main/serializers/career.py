from rest_framework import serializers

from main.models import Contacts, Vacancy, Resume, News


class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = "__all__"
        lookup_fields = 'slug'
        extra_kwargs = {
            'url': {'lookup_field': 'slug'}
        }


class VacancyListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = ('id', 'title', 'description', 'slug')


class VacancyRetrieveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = "__all__"
        lookup_fields = 'slug'
        extra_kwargs = {
            'url': {'lookup_field': 'slug'}
        }


class ContactsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contacts
        fields = "__all__"


class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resume
        fields = "__all__"
