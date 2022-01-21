from django.db import models
from django.contrib import admin
from .models import Vacancy, Resume, Contacts, Partners, ProductCategories, Products, Services, Posts, Advantages
from martor.widgets import AdminMartorWidget


@admin.register(Vacancy, Resume, Contacts, Partners, ProductCategories, Products, Services, Advantages)
class CustomAdmin(admin.ModelAdmin):
    pass


@admin.register(Posts)
class PostsAdmin(admin.ModelAdmin):
    formfield_overrides = {
        models.TextField: {'widget': AdminMartorWidget}
    }
