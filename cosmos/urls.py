from django.contrib import admin
from django.conf.urls.static import static
from cosmos import settings
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('admin_tools/', include('admin_tools.urls')),
    path('martor/', include('martor.urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
