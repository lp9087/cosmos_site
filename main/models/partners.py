from django.db import models
from main.models.base import BaseABSModel


class PartnersCategories(BaseABSModel):
    title = models.CharField(verbose_name='Название категории партнёров', max_length=155, default='', blank=True)

    def __str__(self):
        return self.title


class Partners(BaseABSModel):
    title = models.CharField(verbose_name='Партнёр', max_length=155, default='', blank=True)
    description = models.CharField(verbose_name='Описание', max_length=155, default='', blank=True)
    category = models.ForeignKey('PartnersCategories', on_delete=models.SET_NULL, null=True)
    link = models.URLField(max_length=200)
    image = models.ImageField(upload_to="partners_images/", blank=True, verbose_name='Картинка партнёра')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Партнёр'
        verbose_name_plural = 'Партнёры'
