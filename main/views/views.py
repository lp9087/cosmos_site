from rest_framework import viewsets

from main.models import Vacancy, Resume, Contacts, PartnersTypes, Partners, Services
from main.serializers.career import VacancySerializer, ResumeSerializer, ContactsSerializer
from main.serializers.patners import PartnersTypesSerializer, PartnerSerializer
from main.serializers.services import ServicesSerializer


class VacancyViewSet(viewsets.ModelViewSet):
    """
    Вакансии
    http://127.0.0.1:8000/api/vacancy/
    """
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer


class ResumeViewSet(viewsets.ModelViewSet):
    """
    Резюме
    http://127.0.0.1:8000/api/resume/
    """
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer


class ContactsViewSet(viewsets.ModelViewSet):
    """
    Контакты
    http://127.0.0.1:8000/api/contacts/
    """
    queryset = Contacts.objects.all()
    serializer_class = ContactsSerializer


class PartnersTypesViewSet(viewsets.ModelViewSet):
    """
    Типы партнеров
    """
    queryset = PartnersTypes.objects.all()
    serializer_class = PartnersTypesSerializer


class PartnerViewSet(viewsets.ModelViewSet):
    """
    Партнеры
    """
    queryset = Partners.objects.all()
    serializer_class = PartnerSerializer


class ServicesViewSet(viewsets.ModelViewSet):
    """
    Услуги
    http://127.0.0.1:8000/api/services/
    """
    queryset = Services.objects.all()
    serializer_class = ServicesSerializer
