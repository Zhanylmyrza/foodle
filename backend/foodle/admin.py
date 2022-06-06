from django.contrib import admin
from .models import Recipe

# Register your models here.
class RecipesAdmin(admin.ModelAdmin):
  list=['name', 'calories', 'description', 'nutriScore', 'rating']
  list_display = ['name', 'rating']
  list_filter = ['rating']
  search_fields = ['name']
  

admin.site.register(Recipe, RecipesAdmin)