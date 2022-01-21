from django.db import models

from main.models.base import BaseABSModel, BaseCategoryABSModel, ServiceMixin


class Advantages(BaseABSModel):
    title = models.CharField(verbose_name='Название', max_length=64, default='', blank=True)
    image = models.ImageField(upload_to="advantages/", blank=True, verbose_name="Изображение")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Преимущество'
        verbose_name_plural = 'Преимущества'


class ProductCategories(BaseCategoryABSModel, ServiceMixin):
    image = models.ImageField(upload_to="products_categories_images/", blank=True, verbose_name="Изображение")

    class Meta:
        verbose_name = 'Категория продукции'
        verbose_name_plural = 'Категории продукции'


class Products(BaseABSModel, ServiceMixin):
    title = models.CharField(verbose_name='Название', max_length=64, default='', blank=True)
    advantages = models.ManyToManyField(Advantages, verbose_name='Преимущества')
    categories = models.ManyToManyField(ProductCategories, verbose_name='Категории', blank=True, related_name='products')
    developer = models.CharField(verbose_name='Разработчик продукта', max_length=125, default='', blank=True)
    version = models.CharField(verbose_name='Версия продукта', max_length=64, default='', blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Продукт'
        verbose_name_plural = 'Продукты'
