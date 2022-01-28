from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.db import models

from martor.models import MartorField
from main.models.base import BaseABSModel, ServiceMixin


class Pages(BaseABSModel):
    title = models.CharField(verbose_name='Заголовок', max_length=64, default='', blank=True)

    class Meta:
        verbose_name = 'страница'
        verbose_name_plural = 'страницы'


class Icons(BaseABSModel):
    title = models.CharField(verbose_name='Название', max_length=64, default='', blank=True)
    image = models.ImageField(upload_to="advantages/", blank=True, verbose_name="Изображение")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'иконка'
        verbose_name_plural = 'иконки'


class Block(BaseABSModel, ServiceMixin):
    TYPE = (
        ('images', 'Изображения'),
        ('text', 'Текст'),
        ('icons', 'Иконки')
    )
    priority = models.PositiveSmallIntegerField(verbose_name='Очередность')
    page = models.ForeignKey(Pages, verbose_name='Страница', on_delete=models.CASCADE)
    title = models.CharField(verbose_name='Заголовок', max_length=64, default='', blank=True)
    type = models.CharField(max_length=100, choices=TYPE, verbose_name='Тип блока')

    class Meta:
        verbose_name = 'блок'
        verbose_name_plural = 'блоки'


class BlockImages(BaseABSModel):
    block = models.ForeignKey(Block, verbose_name='Блок', on_delete=models.CASCADE, )
    image = models.ImageField(upload_to='products_images/', verbose_name="Изображение")

    class Meta:
        verbose_name = 'изображение'
        verbose_name_plural = 'изображения'


class BlockText(BaseABSModel):
    text = MartorField()

    class Meta:
        verbose_name = 'текстовый блок'
        verbose_name_plural = 'текстовые блоки'
