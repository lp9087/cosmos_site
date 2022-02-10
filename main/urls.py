from django.urls import path, include
from main.views import martor as martor_views

from rest_framework.routers import DefaultRouter
from main.views.views import NewsViewSet, VacancyViewSet, ResumeViewSet, ContactsViewSet, PartnersTypesViewSet, \
    PartnerViewSet, ServicesViewSet, AchievementsViewSet
from main.views.products import ProductCategoriesViewSet

router = DefaultRouter()
router.register('news', NewsViewSet)
router.register('vacancy', VacancyViewSet)
router.register('resume', ResumeViewSet)
router.register('contacts', ContactsViewSet)
router.register('partners_types', PartnersTypesViewSet)
router.register('partners', PartnerViewSet)
router.register('product-categories', ProductCategoriesViewSet)
router.register('services', ServicesViewSet)
router.register('achievements', AchievementsViewSet)

urlpatterns = [
    path('api/uploader/', martor_views.markdown_uploader, name='markdown_uploader_page'),
    path('api/', include(router.urls)),
]