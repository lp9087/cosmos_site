from django.contrib import admin
from .models import Vacancy, Resume, Contacts, Partners, ProductCategories, Products, Services


@admin.register(Vacancy, Resume, Contacts, Partners, ProductCategories, Products, Services)
class CustomAdmin(admin.ModelAdmin):
    pass

