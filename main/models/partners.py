from django.db import models
from main.models.base import BaseABSModel, BaseCategoryABSModel, ServiceMixin


class PartnersTypes(BaseCategoryABSModel):
    class Meta:
        verbose_name = 'Тип партнерства'
        verbose_name_plural = 'Типы партнерства'


class Partners(BaseABSModel, ServiceMixin):
    title = models.CharField(verbose_name='Название', max_length=155, default='', blank=True)
    description = models.TextField(verbose_name='Описание', default='', blank=True)
    partners_type = models.ForeignKey(PartnersTypes, verbose_name='Тип партнерства', on_delete=models.SET_NULL,
                                      null=True, related_name='partners')
    link = models.URLField(max_length=200, verbose_name='Ссылка на сайт')
    image = models.ImageField(upload_to="partners_images/", blank=True, verbose_name='Изображение')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Партнёр'
        verbose_name_plural = 'Партнёры'
