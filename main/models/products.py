from django.db import models

from main.models.pages import ProductPages, ServicePages
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
    slug = models.SlugField(verbose_name='URL', max_length=50, unique=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        if not ProductPages.objects.filter(product=self):
            ProductPages.objects.create(product=self, title="Пусто")

    class Meta:
        verbose_name = 'продукт'
        verbose_name_plural = 'продукты'


class Services(BaseABSModel, ServiceMixin):
    title = models.CharField(verbose_name='Название услуги', max_length=255, default='', blank=True)
    short_description = models.CharField(verbose_name='Краткое описание', max_length=255, default='', blank=True)
    full_description = models.TextField(verbose_name='Подробное описание', default='', blank=True)
    image = models.ImageField(upload_to="services_images/", blank=True, verbose_name='Изображение')
    slug = models.SlugField(verbose_name='URL', max_length=50, unique=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        if not ServicePages.objects.filter(service=self):
            ServicePages.objects.create(service=self, title="Пусто")

    class Meta:
        verbose_name = 'услуга'
        verbose_name_plural = 'услуги'
