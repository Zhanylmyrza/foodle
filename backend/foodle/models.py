from django.db import models

# Create your models here.
def upload_path(instance, filename):
  return '/'.join(['covers', str(instance.name), filename])

class Recipe(models.Model):
  name = models.CharField(max_length=100)
  image = models.ImageField(blank=True, null=True, upload_to=upload_path)
  calories = models.CharField(max_length=100)
  description = models.TextField()
  nutriScore = models.IntegerField()
  rating = models.FloatField()
  #image , dietType => dropdown list
  
  def _str_(self):
     return self.name
