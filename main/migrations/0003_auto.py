# Generated by Django 3.2.9 on 2022-01-31 09:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_auto'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='productpages',
            name='page',
        ),
        migrations.AddField(
            model_name='productpages',
            name='pages_ptr',
            field=models.OneToOneField(auto_created=True, default=1, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='main.pages'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='productpages',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.products', verbose_name='Продукт'),
        ),
        migrations.DeleteModel(
            name='ServicePages',
        ),
    ]