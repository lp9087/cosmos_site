from django.contrib import admin
from main.models import *


@admin.register(Vacancy, Resume, Contacts, Partners, ProductCategories, Services)
class CustomAdmin(admin.ModelAdmin):
    pass


@admin.register(Products)
class ProductsAdmin(admin.ModelAdmin):
    filter_horizontal = ('categories',)
