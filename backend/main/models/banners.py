from django.db import models

from main.models import BaseABSModel, ServiceMixin


class Banners(BaseABSModel, ServiceMixin):
    title = models.CharField(verbose_name='Название баннера', max_length=155, default='', blank=True)
    description = models.TextField(verbose_name='Описание баннера', default='', blank=True)
    link = models.URLField(max_length=200, verbose_name='Ссылка на запись')
    image = models.ImageField(upload_to="banners_images/", blank=True, verbose_name='Изображение')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'баннер'
        verbose_name_plural = 'баннеры'
