from django.db import models
from nested_admin.nested import *
from django.contrib import admin

from main.models.pages import Block, BlockImages, BlockText
from main.models.menu import MenuItems
from main.models.products import ProductPages, Products, ProductCategories, Services, ServicePages
from main.models.partners import Partners, PartnersTypes
from main.models.news import News
from main.models.career import Vacancy, Resume
from main.models.contacts import Contacts
from martor.widgets import AdminMartorWidget


@admin.register(Vacancy, Resume, Contacts, Partners, ProductCategories, Products, Services, MenuItems, PartnersTypes)
class CustomAdmin(admin.ModelAdmin):
    pass


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'dt_add',)
    formfield_overrides = {
        models.TextField: {'widget': AdminMartorWidget}
    }


# Pages
# class BlockImageInline(NestedTabularInline):
#     model = BlockImages
#
#
# class BlockTextInline(NestedTabularInline):
#     model = BlockText
#
#
# class BlockInline(admin.StackedInline):
#     model = Block
#     extra = 0
#
#
# @admin.register(ServicePages, ProductPages)
# class PageAdmin(admin.ModelAdmin):
#     inlines = [BlockInline]