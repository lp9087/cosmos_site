from django.db import models
from main.models.base import BaseABSModel
from martor.models import MartorField


class News(BaseABSModel):
    title = models.CharField(verbose_name='Название', max_length=150, default='', blank=True)
    dt_add = models.DateTimeField('Время добавления', auto_now_add=True)
    content = MartorField("Текст")
    image = models.ImageField(verbose_name='Изображение', upload_to='images/news/', default='')
    slug = models.SlugField(verbose_name='URL', max_length=50, unique=True)

    class Meta:
        verbose_name = 'новость'
        verbose_name_plural = 'новости'
