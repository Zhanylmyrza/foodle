# Generated by Django 4.0.2 on 2022-05-23 16:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('foodle', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Recipes',
            new_name='Recipe',
        ),
    ]
