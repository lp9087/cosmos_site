from django.db import models
from django.core.validators import FileExtensionValidator
from main.models.base import BaseABSModel, ServiceMixin
from main.validators import phone_number_validator


class Vacancy(BaseABSModel, ServiceMixin):
    title = models.CharField(verbose_name='Название', max_length=64, default='', blank=True)
    responsibility = models.TextField(verbose_name='Обязанности', default='', blank=True)
    requirements = models.TextField(verbose_name='Требования', default='', blank=True)
    advantage = models.TextField(verbose_name='Дополнительные преимущества', default='', blank=True)
    conditions = models.TextField(verbose_name='Условия работы', default='', blank=True)
    key_skills = models.TextField(verbose_name='Ключевые навыки', default='', blank=True)
    employment_type = models.TextField(verbose_name='Тип занятости', default='', blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'вакансия'
        verbose_name_plural = 'вакансии'


class Resume(BaseABSModel):
    full_name = models.CharField(verbose_name='ФИО', max_length=64, default='')
    email = models.EmailField(verbose_name='Email')
    phone = models.CharField(verbose_name='Телефон', validators=[phone_number_validator],  max_length=20)
    additional = models.TextField(verbose_name='Дополнительная информация', default='', blank=True)
    attachment = models.FileField(verbose_name='Прикрепленный файл',
                                  validators=[FileExtensionValidator('pdf', 'doc', 'docx')])

    def __str__(self):
        return f'Резюме от {self.full_name}'

    class Meta:
        verbose_name = 'резюме'
        verbose_name_plural = 'резюме'