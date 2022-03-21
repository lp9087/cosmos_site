from django.db import models
from polymorphic.models import PolymorphicModel

from .base import BaseABSModel, ServiceMixin


class MenuItems(BaseABSModel, PolymorphicModel, ServiceMixin):
    title = models.CharField(verbose_name='Название', max_length=64)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'элемент меню'
        verbose_name_plural = 'элементы меню'


class ProductMenuItems(MenuItems):

    class Meta:
        verbose_name = 'продукт'
        verbose_name_plural = 'продукты'


class ServiceMenuItems(MenuItems):

    class Meta:
        verbose_name = 'услуга'
        verbose_name_plural = 'услуги'


class CustomPageMenuItems(MenuItems):
    custom_page = models.ForeignKey('main.CustomPages', verbose_name='Страница', on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'кастомная страница'
        verbose_name_plural = 'кастомные страницы'


class NewsMenuItems(MenuItems):

    class Meta:
        verbose_name = 'новость'
        verbose_name_plural = 'новости'


class VacancyMenuItems(MenuItems):

    class Meta:
        verbose_name = 'вакансия'
        verbose_name_plural = 'вакансии'
