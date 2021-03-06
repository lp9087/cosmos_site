from rest_framework import viewsets

from main.models import Vacancy, Resume, Contacts, PartnersTypes, Services, News, Partners, Achievements, Feedback, \
    Pages, CustomPages
from main.models.banners import Banners
from main.serializers.achievements import AchievementsSerializer
from main.serializers.banners import BannersSerializer
from main.serializers.career import VacancyListSerializer, VacancyRetrieveSerializer, ContactsSerializer, ResumeSerializer, NewsSerializer
from main.serializers.feedback import FeedbackSerializer
from main.serializers.partners import PartnersTypesSerializer, PartnerSerializer
from main.serializers.services import ServicesListSerializer, ServicesRetrieveSerializer
from main.serializers.custompages import CustomPageListSerializer, CustomPageRetrieveSerializer


class NewsViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Новости
    http://127.0.0.1:8000/api/news/
    """
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    lookup_field = 'slug'


class VacancyViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Вакансии
    http://127.0.0.1:8000/api/vacancy/
    """
    serializers = {
        'list': VacancyListSerializer,
        'retrieve': VacancyRetrieveSerializer,
        'default': VacancyRetrieveSerializer
    }
    queryset = Vacancy.objects.all()
    lookup_field = 'slug'

    def get_serializer_class(self):
        return self.serializers.get(self.action,
                                    self.serializers['default'])


class ResumeViewSet(viewsets.ModelViewSet):
    """
    Резюме
    http://127.0.0.1:8000/api/resume/
    """
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer
    http_method_names = ('post',)


class ContactsViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Контакты
    http://127.0.0.1:8000/api/contacts/
    """
    queryset = Contacts.objects.all()
    serializer_class = ContactsSerializer


class PartnersTypesViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Типы партнеров
    """
    queryset = PartnersTypes.objects.all()
    serializer_class = PartnersTypesSerializer


class PartnerViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Партнеры
    """
    queryset = Partners.objects.all()
    serializer_class = PartnerSerializer


class ServicesViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Услуги
    http://127.0.0.1:8000/api/services/
    """
    queryset = Services.objects.all()
    serializers = {
        'list': ServicesListSerializer,
        'retrieve': ServicesRetrieveSerializer,
        'default': ServicesRetrieveSerializer
    }
    lookup_field = 'slug'

    def get_serializer_class(self):
        return self.serializers.get(self.action,
                                    self.serializers['default'])


class AchievementsViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Достижения
    http://127.0.0.1:8000/api/achievements/
    """
    queryset = Achievements.objects.all()
    serializer_class = AchievementsSerializer


class FeedbackViewSet(viewsets.ModelViewSet):
    """
    Обратная связь
    http://127.0.0.1:8000/api/feedback/
    """
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer
    http_method_names = ('post', )


class CustomPagesViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Страница
    http://127.0.0.1:8000/api/pages/
    """
    serializers = {
        'list': CustomPageListSerializer,
        'retrieve': CustomPageRetrieveSerializer,
        'default': CustomPageRetrieveSerializer
    }
    queryset = CustomPages.objects.all()
    lookup_field = 'slug'

    def get_serializer_class(self):
        return self.serializers.get(self.action,
                                    self.serializers['default'])


class BannersViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Баннеры
    "http://127.0.0.1:8001/api/banners/
    """
    queryset = Banners.objects.all()
    serializer_class = BannersSerializer


# class DownloadFileView(APIView):
#     """
#     Скачивание архива группы файлов Конъюктурного анализа по 'id' : 'conjuctural_analysis_id'
#     """
#     lookup_url_kwarg = 'products_id'
#
#     def get(self, *args, **kwargs):
#         file_handle = self.get_object().file.open()
#         file_name = self.get_object().file.name.split('/')[2]
#         response = FileResponse(file_handle, content_type='whatever')
#         response['Content-Length'] = self.get_object().file.size
#         response['Content-Disposition'] = 'attachment; filename="%s"' % urllib.parse.quote(file_name)
#         return response
