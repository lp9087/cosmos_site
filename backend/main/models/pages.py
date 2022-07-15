from django.db import models

from martor.models import MartorField
from polymorphic.models import PolymorphicModel

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
    description = models.TextField(verbose_name='Описание', default='', blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'страница'
        verbose_name_plural = 'страницы'


class ProductTabs(Pages):
    product = models.ForeignKey('main.Products',
                                verbose_name='Продукт', on_delete=models.CASCADE, related_name='product_tabs')
    slug = models.SlugField(verbose_name='URL', max_length=50, unique=True)

    class Meta:
        verbose_name = 'вкладка продукта'
        verbose_name_plural = 'вкладки продуктов'


class ServicePages(Pages):
    service = models.ForeignKey('main.Services', verbose_name='Услуга', on_delete=models.CASCADE,
                                related_name='service_pages')

    class Meta:
        verbose_name = 'страница услуги'
        verbose_name_plural = 'страницы услуг'


class CustomPages(Pages):
    map = models.BooleanField('Отображение карты проектов', default=False)
    slug = models.SlugField(verbose_name='URL', max_length=50, unique=True)

    class Meta:
        verbose_name = 'кастомная страница'
        verbose_name_plural = 'кастомные страницы'


class Blocks(PolymorphicModel, ServiceMixin):
    SPACING = (
        (None, 'без отступа'),
        ('sm', 'маленький'),
        ('md', 'средний'),
        ('lg', 'большой'),
    )

    title = models.CharField(verbose_name='Заголовок', max_length=64, default='', blank=True)
    position = models.PositiveSmallIntegerField(verbose_name='Позиция', null=True)
    page = models.ForeignKey(Pages, verbose_name='Страница', on_delete=models.CASCADE, related_name='blocks')
    spacing = models.CharField(verbose_name='Отступ', max_length=150, choices=SPACING, default='md', blank=True)

    class Meta:
        verbose_name = 'блок'
        verbose_name_plural = 'блоки'
        ordering = ["position"]


class BlockImages(Blocks):

    class Meta:
        verbose_name = 'блок изображений'
        verbose_name_plural = 'блоки изображений'


class Image(models.Model):
    name_image = models.CharField(verbose_name='Название картинки', max_length=120, default='', blank=True)
    position = models.PositiveSmallIntegerField(verbose_name='Позиция', null=True)
    block = models.ForeignKey(BlockImages, related_name='images', on_delete=models.CASCADE)
    img = models.ImageField(upload_to='images/')

    class Meta:
        verbose_name = 'изображение'
        verbose_name_plural = 'изображения'
        ordering = ["position"]


class BlockText(Blocks):
    text = MartorField()
    img_position = models.PositiveSmallIntegerField(verbose_name='Позиция картинки', null=True)
    img = models.ImageField(upload_to='images/', null=True)

    class Meta:
        verbose_name = 'текстовый блок'
        verbose_name_plural = 'текстовые блоки'


class BlockCards(Blocks):

    class Meta:
        verbose_name = 'блок с карточками'
        verbose_name_plural = 'блоки с карточками'


class DescriptionCards(models.Model):
    name_card = models.CharField(verbose_name='Название карточки', max_length=64, default='', blank=True)
    position = models.PositiveSmallIntegerField(verbose_name='Позиция', null=True)
    block = models.ForeignKey(BlockCards, related_name='block_card', on_delete=models.CASCADE)
    description = models.TextField(verbose_name='Описание', default='', blank=True)
    link = models.URLField(max_length=200, verbose_name='Ссылка на сайт', default='', blank=True)

    class Meta:
        verbose_name = 'карточка'
        verbose_name_plural = 'карточки'
        ordering = ["position"]


class BlockCTA(Blocks):
    ctaText = models.CharField(verbose_name='Текст вызова', max_length=225, default='', blank=True)

    class Meta:
        verbose_name = 'блок кнопки для связи'
        verbose_name_plural = 'блоки кнопки для связи'
