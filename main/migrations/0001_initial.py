# Generated by Django 3.2.9 on 2022-02-17 13:55

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import main.validators
import martor.models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('contenttypes', '0002_remove_content_type_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='Achievements',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=155, verbose_name='Название')),
                ('image', models.ImageField(upload_to='images/achievements/', verbose_name='Изображение')),
            ],
            options={
                'verbose_name': 'Достижения',
                'verbose_name_plural': 'Достижения',
            },
        ),
        migrations.CreateModel(
            name='Blocks',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_active', models.BooleanField(default=True, help_text='Определяет, следует ли считать эту запись активной. Снимите этот флажок вместо удаления записи.', verbose_name='Активный')),
                ('title', models.CharField(blank=True, default='', max_length=64, verbose_name='Заголовок')),
                ('position', models.PositiveSmallIntegerField(null=True, verbose_name='Позиция')),
                ('spacing', models.CharField(blank=True, choices=[(None, 'без отступа'), ('sm', 'маленький'), ('md', 'средний'), ('lg', 'большой')], default='md', max_length=150, verbose_name='Отступ')),
            ],
            options={
                'verbose_name': 'блок',
                'verbose_name_plural': 'блоки',
                'ordering': ['position'],
            },
        ),
        migrations.CreateModel(
            name='Contacts',
            fields=[
                ('is_active', models.BooleanField(default=True, help_text='Определяет, следует ли считать эту запись активной. Снимите этот флажок вместо удаления записи.', verbose_name='Активный')),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('title', models.CharField(blank=True, default='', max_length=155, verbose_name='Название')),
                ('type', models.CharField(choices=[('text', 'текст'), ('phone', 'номер телефона'), ('link', 'ссылка'), ('mail', 'почта')], max_length=300, verbose_name='Тип')),
                ('values', models.CharField(blank=True, default='', max_length=155, verbose_name='Значение')),
            ],
            options={
                'verbose_name': 'контакт',
                'verbose_name_plural': 'контакты',
            },
        ),
        migrations.CreateModel(
            name='Feedback',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('full_name', models.CharField(default='', max_length=64, verbose_name='ФИО')),
                ('phone', models.CharField(max_length=20, validators=[main.validators.phone_number_validator], verbose_name='Контактный телефон')),
                ('email', models.EmailField(blank=True, default='', max_length=254, verbose_name='Email')),
                ('additional', models.TextField(blank=True, default='', verbose_name='Тема вопроса')),
            ],
            options={
                'verbose_name': 'Обратная связь',
                'verbose_name_plural': 'Обратная связь',
            },
        ),
        migrations.CreateModel(
            name='Icons',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('title', models.CharField(blank=True, default='', max_length=64, verbose_name='Название')),
                ('image', models.ImageField(blank=True, upload_to='advantages/', verbose_name='Изображение')),
            ],
            options={
                'verbose_name': 'иконка',
                'verbose_name_plural': 'иконки',
            },
        ),
        migrations.CreateModel(
            name='MenuItems',
            fields=[
                ('is_active', models.BooleanField(default=True, help_text='Определяет, следует ли считать эту запись активной. Снимите этот флажок вместо удаления записи.', verbose_name='Активный')),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=64, verbose_name='Название')),
                ('icon', models.ImageField(upload_to='images/menu/', verbose_name='Изображение')),
                ('url', models.URLField(max_length=255, verbose_name='Ссылка на страницу')),
            ],
            options={
                'verbose_name': 'элемент меню',
                'verbose_name_plural': 'элементы меню',
            },
        ),
        migrations.CreateModel(
            name='News',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('title', models.CharField(blank=True, default='', max_length=150, verbose_name='Название')),
                ('dt_add', models.DateTimeField(auto_now_add=True, verbose_name='Время добавления')),
                ('content', martor.models.MartorField(verbose_name='Текст')),
                ('image', models.ImageField(default='', upload_to='images/news/', verbose_name='Изображение')),
            ],
            options={
                'verbose_name': 'новость',
                'verbose_name_plural': 'новости',
            },
        ),
        migrations.CreateModel(
            name='Pages',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('title', models.CharField(blank=True, default='', max_length=64, verbose_name='Заголовок')),
            ],
            options={
                'verbose_name': 'страница',
                'verbose_name_plural': 'страницы',
            },
        ),
        migrations.CreateModel(
            name='PartnersTypes',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('title', models.CharField(blank=True, default='', max_length=128, verbose_name='Название')),
            ],
            options={
                'verbose_name': 'тип партнерства',
                'verbose_name_plural': 'типы партнерства',
            },
        ),
        migrations.CreateModel(
            name='ProductCategories',
            fields=[
                ('is_active', models.BooleanField(default=True, help_text='Определяет, следует ли считать эту запись активной. Снимите этот флажок вместо удаления записи.', verbose_name='Активный')),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('title', models.CharField(blank=True, default='', max_length=128, verbose_name='Название')),
                ('image', models.ImageField(blank=True, upload_to='products_categories_images/', verbose_name='Изображение')),
            ],
            options={
                'verbose_name': 'категория продукции',
                'verbose_name_plural': 'категории продукции',
            },
        ),
        migrations.CreateModel(
            name='Resume',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('full_name', models.CharField(default='', max_length=64, verbose_name='ФИО')),
                ('email', models.EmailField(max_length=254, verbose_name='Email')),
                ('phone', models.CharField(max_length=20, validators=[main.validators.phone_number_validator], verbose_name='Телефон')),
                ('additional', models.TextField(blank=True, default='', verbose_name='Дополнительная информация')),
                ('attachment', models.FileField(upload_to='', validators=[django.core.validators.FileExtensionValidator('pdf', 'doc', 'docx')], verbose_name='Прикрепленный файл')),
            ],
            options={
                'verbose_name': 'резюме',
                'verbose_name_plural': 'резюме',
            },
        ),
        migrations.CreateModel(
            name='Services',
            fields=[
                ('is_active', models.BooleanField(default=True, help_text='Определяет, следует ли считать эту запись активной. Снимите этот флажок вместо удаления записи.', verbose_name='Активный')),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('title', models.CharField(blank=True, default='', max_length=255, verbose_name='Название услуги')),
                ('short_description', models.CharField(blank=True, default='', max_length=255, verbose_name='Краткое описание')),
                ('full_description', models.TextField(blank=True, default='', verbose_name='Подробное описание')),
                ('image', models.ImageField(blank=True, upload_to='services_images/', verbose_name='Изображение')),
            ],
            options={
                'verbose_name': 'услуга',
                'verbose_name_plural': 'услуги',
            },
        ),
        migrations.CreateModel(
            name='Vacancy',
            fields=[
                ('is_active', models.BooleanField(default=True, help_text='Определяет, следует ли считать эту запись активной. Снимите этот флажок вместо удаления записи.', verbose_name='Активный')),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('title', models.CharField(blank=True, default='', max_length=64, verbose_name='Название')),
                ('responsibility', models.TextField(blank=True, default='', verbose_name='Обязанности')),
                ('requirements', models.TextField(blank=True, default='', verbose_name='Требования')),
                ('advantage', models.TextField(blank=True, default='', verbose_name='Дополнительные преимущества')),
                ('conditions', models.TextField(blank=True, default='', verbose_name='Условия работы')),
                ('key_skills', models.TextField(blank=True, default='', verbose_name='Ключевые навыки')),
                ('employment_type', models.TextField(blank=True, default='', verbose_name='Тип занятости')),
            ],
            options={
                'verbose_name': 'вакансия',
                'verbose_name_plural': 'вакансии',
            },
        ),
        migrations.CreateModel(
            name='BlockCards',
            fields=[
                ('blocks_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='main.blocks')),
            ],
            options={
                'verbose_name': 'блок с карточками',
                'verbose_name_plural': 'блоки с карточками',
            },
            bases=('main.blocks',),
        ),
        migrations.CreateModel(
            name='BlockCTA',
            fields=[
                ('blocks_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='main.blocks')),
                ('ctaText', models.CharField(blank=True, default='', max_length=225, verbose_name='Текст вызова')),
            ],
            options={
                'verbose_name': 'блок кнопки для связи',
                'verbose_name_plural': 'блоки кнопки для связи',
            },
            bases=('main.blocks',),
        ),
        migrations.CreateModel(
            name='BlockImages',
            fields=[
                ('blocks_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='main.blocks')),
            ],
            options={
                'verbose_name': 'блок изображений',
                'verbose_name_plural': 'блоки изображений',
            },
            bases=('main.blocks',),
        ),
        migrations.CreateModel(
            name='BlockText',
            fields=[
                ('blocks_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='main.blocks')),
                ('text', martor.models.MartorField()),
            ],
            options={
                'verbose_name': 'текстовый блок',
                'verbose_name_plural': 'текстовые блоки',
            },
            bases=('main.blocks',),
        ),
        migrations.CreateModel(
            name='Products',
            fields=[
                ('is_active', models.BooleanField(default=True, help_text='Определяет, следует ли считать эту запись активной. Снимите этот флажок вместо удаления записи.', verbose_name='Активный')),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('title', models.CharField(blank=True, default='', max_length=64, verbose_name='Название')),
                ('developer', models.CharField(blank=True, default='', max_length=125, verbose_name='Разработчик продукта')),
                ('version', models.CharField(blank=True, default='', max_length=64, verbose_name='Версия продукта')),
                ('categories', models.ManyToManyField(blank=True, related_name='products', to='main.ProductCategories', verbose_name='Категории')),
            ],
            options={
                'verbose_name': 'продукт',
                'verbose_name_plural': 'продукты',
            },
        ),
        migrations.CreateModel(
            name='Partners',
            fields=[
                ('is_active', models.BooleanField(default=True, help_text='Определяет, следует ли считать эту запись активной. Снимите этот флажок вместо удаления записи.', verbose_name='Активный')),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('title', models.CharField(blank=True, default='', max_length=155, verbose_name='Название')),
                ('description', models.TextField(blank=True, default='', verbose_name='Описание')),
                ('link', models.URLField(verbose_name='Ссылка на сайт')),
                ('image', models.ImageField(blank=True, upload_to='partners_images/', verbose_name='Изображение')),
                ('partners_type', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='partners', to='main.partnerstypes', verbose_name='Тип партнерства')),
            ],
            options={
                'verbose_name': 'партнёр',
                'verbose_name_plural': 'партнёры',
            },
        ),
        migrations.AddField(
            model_name='blocks',
            name='page',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.pages', verbose_name='Страница'),
        ),
        migrations.AddField(
            model_name='blocks',
            name='polymorphic_ctype',
            field=models.ForeignKey(editable=False, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='polymorphic_main.blocks_set+', to='contenttypes.contenttype'),
        ),
        migrations.CreateModel(
            name='ServicePages',
            fields=[
                ('pages_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='main.pages')),
                ('service', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.services', verbose_name='Услуга')),
            ],
            options={
                'verbose_name': 'страница услуги',
                'verbose_name_plural': 'страницы услуг',
            },
            bases=('main.pages',),
        ),
        migrations.CreateModel(
            name='ProductPages',
            fields=[
                ('pages_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='main.pages')),
                ('description', models.TextField(blank=True, default='', verbose_name='Описание')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.products', verbose_name='Продукт')),
            ],
            options={
                'verbose_name': 'страница продукта',
                'verbose_name_plural': 'страницы продуктов',
            },
            bases=('main.pages',),
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('position', models.PositiveSmallIntegerField(null=True, verbose_name='Позиция')),
                ('img', models.ImageField(upload_to='images/')),
                ('block', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='main.blockimages')),
            ],
            options={
                'verbose_name': 'изображение',
                'verbose_name_plural': 'изображения',
                'ordering': ['position'],
            },
        ),
        migrations.CreateModel(
            name='DescriptionCards',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_card', models.CharField(blank=True, default='', max_length=64, verbose_name='Название карточки')),
                ('position', models.PositiveSmallIntegerField(null=True, verbose_name='Позиция')),
                ('description', models.TextField(blank=True, default='', verbose_name='Описание')),
                ('link', models.URLField(verbose_name='Ссылка на сайт')),
                ('block', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='block_card', to='main.blockcards')),
            ],
            options={
                'verbose_name': 'карточка',
                'verbose_name_plural': 'карточки',
                'ordering': ['position'],
            },
        ),
    ]
