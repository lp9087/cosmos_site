from django.db import models

from main.models.base import BaseABSModel, BaseCategoryABSModel, ServiceMixin


class ProductCategories(BaseCategoryABSModel, ServiceMixin):
    image = models.ImageField(upload_to="products_categories_images/", blank=True, verbose_name="Изображение")

    class Meta:
        verbose_name = 'категория продукции'
        verbose_name_plural = 'категории продукции'


class Products(BaseABSModel, ServiceMixin):
    title = models.CharField(verbose_name='Название', max_length=64, default='', blank=True)
    categories = models.ManyToManyField(ProductCategories, verbose_name='Категории', blank=True, related_name='products')
    developer = models.CharField(verbose_name='Разработчик продукта', max_length=125, default='', blank=True)
    version = models.CharField(verbose_name='Версия продукта', max_length=64, default='', blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'продукт'
        verbose_name_plural = 'продукты'


# class ProductPages(Pages):
#     product = models.ForeignKey(Products, verbose_name='Продукт', related_name='pages', on_delete=models.CASCADE)
#     page = models.OneToOneField(Pages, verbose_name='Страница', parent_link=True, on_delete=models.CASCADE)
#
#     class Meta:
#         verbose_name = 'страница продукта'
#         verbose_name_plural = 'страницы продуктов'


class Services(BaseABSModel, ServiceMixin):
    title = models.CharField(verbose_name='Название услуги', max_length=255, default='', blank=True)
    short_description = models.CharField(verbose_name='Краткое описание', max_length=255, default='', blank=True)
    full_description = models.TextField(verbose_name='Подробное описание', default='', blank=True)
    image = models.ImageField(upload_to="services_images/", blank=True, verbose_name='Изображение')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'услуга'
        verbose_name_plural = 'услуги'

#
# class ServicePages(Pages):
#     product = models.ForeignKey(Services, verbose_name='Услуга', related_name='pages', on_delete=models.CASCADE)
#     page = models.OneToOneField(Pages, verbose_name='Страница', parent_link=True, on_delete=models.CASCADE)
#
#     class Meta:
#         verbose_name = 'страница услуги'
#         verbose_name_plural = 'страницы услуг'
