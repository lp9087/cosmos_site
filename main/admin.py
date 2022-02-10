from django.db import models
from nested_admin.nested import *
from django.contrib import admin
from nested_admin.nested import *
from nested_admin.polymorphic import *
from main.models.feedback import Feedback
from main.models.achievements import Achievements
from main.models.pages import Blocks, BlockImages, BlockText, Pages, Image, BlockIcons, Icons, ProductPages, \
    ServicePages
from main.models.menu import MenuItems
from main.models.products import Products, ProductCategories, Services
from main.models.partners import Partners, PartnersTypes
from main.models.news import News
from main.models.career import Vacancy, Resume
from main.models.contacts import Contacts
from martor.widgets import AdminMartorWidget


@admin.register(Icons, Vacancy, Resume, Contacts, Partners, ProductCategories, Products, Services, MenuItems,
                PartnersTypes, Achievements, Feedback)
class CustomAdmin(admin.ModelAdmin):
    pass


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'dt_add',)
    formfield_overrides = {
        models.TextField: {'widget': AdminMartorWidget}
    }


# Pages


class ImageInline(NestedStackedInline):
    model = Image
    sortable_field_name = 'position'
    extra = 0


class BlockInline(NestedStackedPolymorphicInline):
    class TextInline(NestedStackedPolymorphicInline.Child):
        model = BlockText
        formfield_overrides = {
            models.TextField: {'widget': AdminMartorWidget}
        }

    class ImageBlockInline(NestedStackedPolymorphicInline.Child):
        model = BlockImages
        inlines = (ImageInline,)

    class IconBlockInline(NestedStackedPolymorphicInline.Child):
        model = BlockIcons
        filter_horizontal = ('icons',)

    model = Blocks
    extra = 0
    sortable_field_name = "position"
    child_inlines = (TextInline, ImageBlockInline, IconBlockInline)


@admin.register(Pages, ProductPages, ServicePages)
class PageAdmin(NestedPolymorphicModelAdmin):
    inlines = (BlockInline,)
