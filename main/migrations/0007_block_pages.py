# Generated by Django 3.2.9 on 2022-02-17 11:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_auto_20220211_1545'),
    ]

    operations = [
        migrations.CreateModel(
            name='BlockCards',
            fields=[
                ('blocks_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='main.blocks')),
                ('description', models.TextField(blank=True, default='', verbose_name='Описание')),
                ('link', models.URLField(verbose_name='Ссылка на сайт')),
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
        migrations.AddField(
            model_name='blocks',
            name='spacing',
            field=models.CharField(blank=True, choices=[(None, 'без отступа'), ('sm', 'маленький'), ('md', 'средний'), ('lg', 'большой')], default='md', max_length=150, verbose_name='Отступ'),
        ),
        migrations.AddField(
            model_name='productpages',
            name='description',
            field=models.TextField(blank=True, default='', verbose_name='Описание'),
        ),
        migrations.AlterField(
            model_name='image',
            name='block',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='main.blockimages'),
        ),
        migrations.DeleteModel(
            name='BlockIcons',
        ),
    ]