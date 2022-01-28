from django.contrib import admin
from django.conf.urls.static import static
from cosmos import settings
from django.urls import path, include


app_name = 'cosmos'
admin.site.site_header = 'Космос-2: Панель администратора'
admin.autodiscover()
admin.site.enable_nav_sidebar = False

urlpatterns = [
    path('admin/', admin.site.urls),
    path('admin_tools/', include('admin_tools.urls')),
    path('martor/', include('martor.urls')),
    path('', include('main.urls')),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
