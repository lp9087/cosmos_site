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
                'Услуги',
                [
                    'main.models.services.Services',
                    'main.models.products.Products',
                    'main.models.products.ProductCategories',
                ]
            ),
            items.ModelList(
                'Вакансии',
                [
                    'main.models.career.Vacancy',
                    'main.models.career.Resume',
                ]
            ),
            items.ModelList(
                'Организации ',
                ['main.models.contacts.Contacts'
                 'main.models.partners.Partners'
                 ]
            ),
        ]
