from django.urls import path, include
from rest_framework_nested import routers

from main.views import martor as martor_views

from rest_framework.routers import DefaultRouter
from main.views.views import NewsViewSet, VacancyViewSet, ResumeViewSet, ContactsViewSet, PartnersTypesViewSet, \
    PartnerViewSet, ServicesViewSet, AchievementsViewSet, FeedbackViewSet
from main.views.products import ProductCategoriesViewSet, ProductsViewSet, ProductsPagesViewSet, BlocksPagesViewSet

router = DefaultRouter()
router.register('news', NewsViewSet)
router.register('vacancy', VacancyViewSet)
router.register('resume', ResumeViewSet)
router.register('contacts', ContactsViewSet)
router.register('partners_types', PartnersTypesViewSet)
router.register('partners', PartnerViewSet)
router.register('product-categories', ProductCategoriesViewSet)
router.register('products', ProductsViewSet)
router.register('products-pages', ProductsPagesViewSet)
pages_router = routers.NestedSimpleRouter(router, 'products-pages', lookup='product_pages')
pages_router.register('blocks-pages', BlocksPagesViewSet, basename='blocks_pages')
router.register('services', ServicesViewSet)
router.register('achievements', AchievementsViewSet)
router.register('feedback', FeedbackViewSet)

urlpatterns = [
    path('api/uploader/', martor_views.markdown_uploader, name='markdown_uploader_page'),
    path('api/', include(router.urls)),
    path('api/', include(pages_router.urls)),
]