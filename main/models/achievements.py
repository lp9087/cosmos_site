from django.db import models
from .base import BaseABSModel


class Achievements(BaseABSModel):
    title = models.CharField(verbose_name='Название', max_length=155)
    image = models.ImageField(verbose_name='Изображение', upload_to='images/achievements/')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Достижения'
        verbose_name_plural = 'Достижения'
