from django.db import models
from main.models.base import BaseABSModel, ServiceMixin


class Contacts(BaseABSModel, ServiceMixin):
    CHOICES = (
        ('text', 'текст'),
        ('phone', 'номер телефона'),
        ('link', 'ссылка'),
        ('mail', 'почта')
    )
    title = models.CharField(verbose_name='Название', max_length=155, default='', blank=True)
    type = models.CharField(verbose_name='Тип', max_length=300, choices=CHOICES)
    values = models.CharField(verbose_name='Значение', max_length=155, default='', blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'контакт'
        verbose_name_plural = 'контакты'
