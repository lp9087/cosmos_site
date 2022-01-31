from django.db import models

from martor.models import MartorField
from polymorphic.models import PolymorphicModel

from main.models.products import Products, Services
from main.models.base import BaseABSModel, ServiceMixin


class Icons(BaseABSModel):
    title = models.CharField(verbose_name='Название', max_length=64, default='', blank=True)
    image = models.ImageField(upload_to="advantages/", blank=True, verbose_name="Изображение")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'иконка'
        verbose_name_plural = 'иконки'


class Pages(BaseABSModel):
    title = models.CharField(verbose_name='Заголовок', max_length=64, default='', blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'страница'
        verbose_name_plural = 'страницы'


class ProductPages(Pages):
    product = models.ForeignKey(Products, verbose_name='Продукт', on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'страница продукта'
        verbose_name_plural = 'страницы продуктов'


class ServicePages(Pages):
    service = models.ForeignKey(Services, verbose_name='Услуга', on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'страница услуги'
        verbose_name_plural = 'страницы услуг'


class Blocks(PolymorphicModel, ServiceMixin):
    title = models.CharField(verbose_name='Заголовок', max_length=64, default='', blank=True)
    position = models.PositiveSmallIntegerField(verbose_name='Позиция', null=True)
    page = models.ForeignKey(Pages, verbose_name='Страница', on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'блок'
        verbose_name_plural = 'блоки'
        ordering = ["position"]


class BlockImages(Blocks):

    class Meta:
        verbose_name = 'блок изображений'
        verbose_name_plural = 'блоки изображений'


class Image(models.Model):
    position = models.PositiveSmallIntegerField(verbose_name='Позиция', null=True)
    block = models.ForeignKey(BlockImages, on_delete=models.CASCADE)
    img = models.ImageField(upload_to='images/')

    class Meta:
        verbose_name = 'изображение'
        verbose_name_plural = 'изображения'
        ordering = ["position"]


class BlockText(Blocks):
    text = MartorField()

    class Meta:
        verbose_name = 'текстовый блок'
        verbose_name_plural = 'текстовые блоки'


class BlockIcons(Blocks):
    icons = models.ManyToManyField(Icons, verbose_name='Иконки')

    class Meta:
        verbose_name = 'блок с иконками'
        verbose_name_plural = 'блоки с иконками'


