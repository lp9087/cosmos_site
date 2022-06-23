from django.core.validators import FileExtensionValidator
from django.db import models
from martor.models import MartorField

from main.models.pages import ServicePages, ProductTabs
from main.models.base import BaseABSModel, BaseCategoryABSModel, ServiceMixin, PriorityMixin
from main.validators import validate_file_extension


def file_upload_path(instance, filename):
    return 'files/products_{0}/{1}'.format(instance.product.id, filename)


class ProductCategories(BaseCategoryABSModel, ServiceMixin, PriorityMixin):
    image = models.ImageField(upload_to="products_categories_images/", blank=True, verbose_name="Изображение")
    content = MartorField("Текст")
    slug = models.SlugField(verbose_name='URL', max_length=50, unique=True)

    class Meta(PriorityMixin.Meta):
        verbose_name = 'категория продукции'
        verbose_name_plural = 'категории продукции'


class Products(BaseABSModel, ServiceMixin, PriorityMixin):
    title = models.CharField(verbose_name='Название', max_length=64, default='', blank=True)
    categories = models.ManyToManyField(ProductCategories, verbose_name='Категории', blank=True, related_name='products')
    developer = models.CharField(verbose_name='Разработчик продукта', max_length=125, default='', blank=True)
    version = models.CharField(verbose_name='Версия продукта', max_length=64, default='', blank=True)
    slug = models.SlugField(verbose_name='URL', max_length=50, unique=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        if not ProductTabs.objects.filter(product=self):
            ProductTabs.objects.create(product=self, title="Пусто")

    class Meta(PriorityMixin.Meta):
        verbose_name = 'продукт'
        verbose_name_plural = 'продукты'


class ProductFile(models.Model):
    file = models.FileField(blank=False, null=False, upload_to=file_upload_path, verbose_name='Загрузка файла',
                            validators=[validate_file_extension], max_length=300)
    product = models.ForeignKey(Products, on_delete=models.CASCADE, related_name='files')

    class Meta:
        verbose_name = 'Файл'
        verbose_name_plural = 'Файлы'


class Services(BaseABSModel, ServiceMixin, PriorityMixin):
    title = models.CharField(verbose_name='Название услуги', max_length=255, default='', blank=True)
    short_description = models.TextField(verbose_name='Краткое описание', default='', blank=True)
    image = models.FileField(upload_to="services_images/", blank=True, verbose_name='Изображение',
                             validators=[FileExtensionValidator(['jpg', 'png', 'jpeg', 'svg'])])
    slug = models.SlugField(verbose_name='URL', max_length=50, unique=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        if not ServicePages.objects.filter(service=self):
            ServicePages.objects.create(service=self, title="Пусто")

    class Meta(PriorityMixin.Meta):
        verbose_name = 'услуга'
        verbose_name_plural = 'услуги'
