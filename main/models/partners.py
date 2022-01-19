from PIL import Image
from django.db import models
from main.models.base import BaseABSModel


class Partners(BaseABSModel):
    title = models.CharField(verbose_name='Партнёр', max_length=155, default='', blank=True)
    link = models.URLField(max_length=200)
    image = models.ImageField(upload_to="partners_images/", blank=True, verbose_name='Картинка партнёра')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Партнёр'
        verbose_name_plural = 'Партнёры'