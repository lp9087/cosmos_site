from django.db import models
from .base import BaseABSModel, ServiceMixin


class MenuItems(BaseABSModel, ServiceMixin):
    CHOICES = (
        ('product', 'продукты'),
        ('services', 'услуги'),
        ('vacancy', 'вакансии'),
        ('link', 'каст. страница')
    )

    title = models.CharField(verbose_name='Название', max_length=64)
    url = models.URLField(verbose_name='Ссылка на страницу', max_length=255)
    type = models.CharField(verbose_name='Тип', max_length=300, choices=CHOICES)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'элемент меню'
        verbose_name_plural = 'элементы меню'
