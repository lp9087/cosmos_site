from django.db import models
from main.models.base import BaseABSModel


class Contacts(BaseABSModel):
    title = models.CharField(verbose_name='Название', max_length=155, default='', blank=True)
    phone = models.CharField(verbose_name='Номер телефона', max_length=155, default='', blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Контакт'
        verbose_name_plural = 'Контакты'
