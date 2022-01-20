from django.urls import path, include

from rest_framework.routers import DefaultRouter

from main.views.views import VacancyViewSet, ResumeViewSet, ContactsViewSet, PartnersTypesViewSet, PartnerViewSet

router = DefaultRouter()
router.register('vacancy', VacancyViewSet)
router.register('resume', ResumeViewSet)
router.register('contacts', ContactsViewSet)
router.register('partners_types', PartnersTypesViewSet)
router.register('partners', PartnerViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    ]