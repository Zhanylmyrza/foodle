# Generated by Django 4.0.2 on 2022-05-23 16:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Recipes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('calories', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('nutriScore', models.IntegerField()),
                ('rating', models.FloatField()),
            ],
        ),
    ]
