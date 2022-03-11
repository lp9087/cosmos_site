from django.urls import path, include
from rest_framework_nested import routers

from main.views import martor as martor_views

from rest_framework_nested.routers import DefaultRouter
from main.views.views import NewsViewSet, VacancyViewSet, ResumeViewSet, ContactsViewSet, PartnersTypesViewSet, \
    PartnerViewSet, ServicesViewSet, AchievementsViewSet, FeedbackViewSet, CustomPagesViewSet
from main.views.products import ProductCategoriesViewSet, ProductsViewSet
from .views import products as files_views
from main.views import menu as menu_views


router = DefaultRouter()
router.register('news', NewsViewSet)
router.register('vacancy', VacancyViewSet)
router.register('resume', ResumeViewSet)
router.register('contacts', ContactsViewSet)
router.register('partners_types', PartnersTypesViewSet)
router.register('partners', PartnerViewSet)
router.register('product-categories', ProductCategoriesViewSet)
router.register('products', ProductsViewSet)
router.register('services', ServicesViewSet)
router.register('achievements', AchievementsViewSet)
router.register('feedback', FeedbackViewSet)
router.register('pages', CustomPagesViewSet)
file_router = routers.NestedSimpleRouter(router, 'products', lookup='product')
file_router.register(r'files', files_views.FileDownloadView, basename='file-download')

urlpatterns = [
    path('api/uploader/', martor_views.markdown_uploader, name='markdown_uploader_page'),
    path('api/menu', menu_views.MenuAPIView.as_view()),
    path('api/', include(router.urls)),
    path('api/', include(file_router.urls)),
]