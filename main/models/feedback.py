from main.models import BaseABSModel
from django.db import models
from main.validators import phone_number_validator


class Feedback(BaseABSModel):
    full_name = models.CharField(verbose_name='ФИО', max_length=64, default='')
    phone = models.CharField(verbose_name='Контактный телефон', validators=[phone_number_validator],  max_length=20)
    email = models.EmailField(verbose_name='Email', default='', blank=True)
    additional = models.TextField(verbose_name='Тема вопроса', default='', blank=True)

    def __str__(self):
        return self.full_name

    class Meta:
        verbose_name = 'Обратная связь'
        verbose_name_plural = 'Обратная связь'
