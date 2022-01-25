from django.db import models
from .base import BaseABSModel, ServiceMixin


class MenuItems(BaseABSModel, ServiceMixin):
    title = models.CharField(verbose_name='Название', max_length=64)
    icon = models.ImageField(verbose_name='Изображение', upload_to='images/menu/')
    url = models.URLField(verbose_name='Ссылка на страницу', max_length=255)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Элемент меню'
        verbose_name_plural = 'Элементы меню'