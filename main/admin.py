from django.db import models
from django.contrib import admin

from main.models import News
from main.models.menu import MenuItems
from .models import Vacancy, Resume, Contacts, Partners, ProductCategories, Products, Services, Posts, Advantages
from martor.widgets import AdminMartorWidget


@admin.register(Vacancy, Resume, Contacts, Partners, ProductCategories, Products, Services, Advantages, MenuItems)
class CustomAdmin(admin.ModelAdmin):
    pass


@admin.register(Posts)
class PostsAdmin(admin.ModelAdmin):
    formfield_overrides = {
        models.TextField: {'widget': AdminMartorWidget}
    }


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'dt_add',)
    formfield_overrides = {
        models.TextField: {'widget': AdminMartorWidget}
    }

