from django.db import models
from django.core.validators import FileExtensionValidator
from main.models.base import BaseABSModel, ServiceMixin
from main.validators import phone_number_validator
from martor.models import MartorField


class Vacancy(BaseABSModel, ServiceMixin):
    title = models.CharField(verbose_name='Название', max_length=64, default='', blank=True)
    description = models.TextField(verbose_name='Описание', default='', blank=True)
    content = MartorField("Текст")
    slug = models.SlugField(verbose_name='URL', max_length=50, unique=True)

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
    vacancy = models.ForeignKey(Vacancy, verbose_name='Ваканисия', on_delete=models.SET_NULL,
                                null=True, related_name='vacancy')

    def __str__(self):
        return f'Резюме от {self.full_name}'

    class Meta:
        verbose_name = 'резюме'
        verbose_name_plural = 'резюме'
