from rest_framework import viewsets

from main.models import Vacancy, Resume, Contacts, PartnersTypes, Services, News, Partners, Achievements, Feedback, \
    Pages
from main.serializers.achievements import AchievementsSerializer
from main.serializers.career import VacancySerializer, ContactsSerializer, ResumeSerializer, NewsSerializer
from main.serializers.feedback import FeedbackSerializer
from main.serializers.partners import PartnersTypesSerializer, PartnerSerializer
from main.serializers.services import PagesSerializer, ServicesListSerializer, ServicesRetrieveSerializer


class NewsViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Новости
    http://127.0.0.1:8000/api/news/
    """
    queryset = News.objects.all()
    serializer_class = NewsSerializer


class VacancyViewSet(viewsets.ReadOnlyModelViewSet):
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


class PagesViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Страница
    http://127.0.0.1:8000/api/pages/
    """
    queryset = Pages.objects.all()
    serializer_class = PagesSerializer
    lookup_field = 'slug'


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
