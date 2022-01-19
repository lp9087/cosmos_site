from django.db import models
from main.models.base import BaseABSModel


class Services(BaseABSModel):
    title = models.CharField(verbose_name='Название услуги', max_length=255, default='', blank=True)
    short_description = models.CharField(verbose_name='Краткое описание', max_length=255, default='', blank=True)
    full_description = models.TextField(verbose_name='Подробное описание', default='', blank=True)
    image = models.ImageField(upload_to="services_images/", blank=True, verbose_name='Изображение')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Услуга'
        verbose_name_plural = 'Услуги'
