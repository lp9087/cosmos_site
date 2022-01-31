# Generated by Django 3.2.9 on 2022-01-31 08:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='blockimages',
            options={'verbose_name': 'блок изображений', 'verbose_name_plural': 'блоки изображений'},
        ),
        migrations.AlterModelOptions(
            name='image',
            options={'ordering': ['position'], 'verbose_name': 'изображение', 'verbose_name_plural': 'изображения'},
        ),
        migrations.AlterField(
            model_name='blocks',
            name='position',
            field=models.PositiveSmallIntegerField(null=True, verbose_name='Позиция'),
        ),
        migrations.AlterField(
            model_name='image',
            name='position',
            field=models.PositiveSmallIntegerField(null=True, verbose_name='Позиция'),
        ),
        migrations.CreateModel(
            name='BlockIcons',
            fields=[
                ('blocks_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='main.blocks')),
                ('icons', models.ManyToManyField(to='main.Icons', verbose_name='Иконки')),
            ],
            options={
                'verbose_name': 'блок с иконками',
                'verbose_name_plural': 'блоки с иконками',
            },
            bases=('main.blocks',),
        ),
    ]
