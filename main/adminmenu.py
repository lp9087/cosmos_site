from django.urls import reverse
from admin_tools.menu.models import *


class CustomMenu(Menu):
    """
    Custom Menu for config admin site.
    """

    def __init__(self, **kwargs):
        Menu.__init__(self, **kwargs)
        self.children += [
            items.MenuItem('Главная', reverse('admin:index')),
            items.ModelList(
                'Продукты и Услуги',
                [
                    'main.models.products.ProductCategories', 'main.models.products.Products',
                    'main.models.pages.ProductPages', 'main.models.products.Services',
                    'main.models.pages.ServicePages'
                ]
            ),
            items.ModelList(
                'Карьера',
                [
                    'main.models.career.Vacancy',
                    'main.models.career.Resume',
                ]
            ),
            items.ModelList(
                'Наполнение ',
                [
                    'main.models.contacts.Contacts', 'main.models.menu.MenuItems', 'main.models.news.News',
                    'main.models.partners.PartnersTypes', 'main.models.partners.Partners'
                 ]
            ),
        ]
