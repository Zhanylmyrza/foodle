from rest_framework import serializers
from .models import Recipe

#Why do we need serializers?

# To package the data when it is going to the server and to UNpackeage the data when it is coming from the server 

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ('id' ,'name', 'image', 'calories', 'description', 'nutriScore', 'rating' )
        