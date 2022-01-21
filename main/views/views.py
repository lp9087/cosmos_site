from rest_framework import viewsets
from main.models import Vacancy, Resume, Contacts, PartnersTypes, Partners, ProductCategories
from main.serializers.career import VacancySerializer, ResumeSerializer, ContactsSerializer, PartnerSerializer, \
    PartnersTypesSerializer
from main.serializers.services import ServicesSerializer


class VacancyViewSet(viewsets.ModelViewSet):
    """
    Вакансии
    http://127.0.0.1:8000/api/vacancy/
    """
    # permission_classes = [AllowAny]
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer


class ResumeViewSet(viewsets.ModelViewSet):
    """

    http://127.0.0.1:8000/api/resume/
    """
    # permission_classes = [AllowAny]
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer


class ContactsViewSet(viewsets.ModelViewSet):
    """

    http://127.0.0.1:8000/api/contacts/
    """
    # permission_classes = [AllowAny]
    queryset = Contacts.objects.all()
    serializer_class = ContactsSerializer


class PartnersTypesViewSet(viewsets.ModelViewSet):
    """


    """
    # permission_classes = [AllowAny]
    queryset = PartnersTypes.objects.all()
    serializer_class = PartnersTypesSerializer


class PartnerViewSet(viewsets.ModelViewSet):
    """


    """
    # permission_classes = [AllowAny]
    queryset = Partners.objects.all()
    serializer_class = PartnerSerializer


class ServicesViewSet(viewsets.ModelViewSet):
    """

    http://127.0.0.1:8000/api/services/
    """
    # permission_classes = [AllowAny]
    queryset = Services.objects.all()
    serializer_class = ServicesSerializer