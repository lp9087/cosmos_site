from django.db import models

from main.models.base import BaseABSModel


class ProductCategories(BaseABSModel):
    title = models.CharField(verbose_name='Название', max_length=64, default='', blank=True)
    icon = models.ImageField(upload_to="icon/", blank=True, verbose_name="Иконка продукта")

    def __str__(self):
        return self.title


class Products(BaseABSModel):
    title = models.CharField(verbose_name='Название продукта', max_length=64, default='', blank=True)
    categories = models.ManyToManyField(ProductCategories, verbose_name='Категории', blank=True)
    developer = models.CharField(verbose_name='Разработчик продукта', max_length=125, default='', blank=True)
    version = models.CharField(verbose_name='Версия продукта', max_length=64, default='', blank=True)

    def __str__(self):
        return self.title
