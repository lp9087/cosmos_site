from django.db import models
from nested_admin.nested import *
from django.contrib import admin
from nested_admin.nested import *
from nested_admin.polymorphic import *
from polymorphic.admin import PolymorphicChildModelAdmin, PolymorphicParentModelAdmin

from main.models.feedback import Feedback
from main.models.achievements import Achievements
from main.models.pages import Blocks, BlockImages, BlockText, Image, Icons, ProductPages, \
    ServicePages, BlockCards, BlockCTA, DescriptionCards, CustomPages
from main.models.menu import MenuItems, ServiceMenuItems, ProductMenuItems, CustomPageMenuItems
from main.models.products import Products, ProductCategories, Services, ProductFile
from main.models.partners import Partners, PartnersTypes
from main.models.news import News
from main.models.career import Vacancy, Resume
from main.models.contacts import Contacts
from martor.widgets import AdminMartorWidget


@admin.register(Icons, Vacancy, Resume, Contacts, Partners, ProductCategories, Products, Services,
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


class CardsInline(NestedStackedInline):
    model = DescriptionCards
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

    class CardsBlockInline(NestedStackedPolymorphicInline.Child):
        model = BlockCards
        inlines = (CardsInline,)

    class CTABlockInline(NestedStackedPolymorphicInline.Child):
        model = BlockCTA

    model = Blocks
    extra = 0
    sortable_field_name = "position"
    child_inlines = (TextInline, ImageBlockInline, CardsBlockInline, CTABlockInline)


@admin.register(CustomPages, ProductPages, ServicePages)
class PageAdmin(NestedPolymorphicModelAdmin):
    inlines = (BlockInline,)


#################
#     Files     #
#################


@admin.register(ProductFile)
class ProductFileAdmin(admin.ModelAdmin):
    list_display = ('product',)


#################
#     Menu      #
#################

class MenuItemChildAdmin(PolymorphicChildModelAdmin):
    base_model = MenuItems


@admin.register(ProductMenuItems)
class ProductMenuItemChildAdmin(MenuItemChildAdmin):
    base_model = ProductMenuItems


@admin.register(ServiceMenuItems)
class ServiceMenuItemChildAdmin(MenuItemChildAdmin):
    base_model = ServiceMenuItems


@admin.register(CustomPageMenuItems)
class CustomPageMenuItemChildAdmin(MenuItemChildAdmin):
    base_model = CustomPageMenuItems


@admin.register(MenuItems)
class MenuItemParentAdmin(PolymorphicParentModelAdmin):
    base_model = MenuItems
    child_models = (ProductMenuItems, ServiceMenuItems, CustomPageMenuItems)