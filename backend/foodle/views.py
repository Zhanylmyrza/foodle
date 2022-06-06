# from django.http import HttpResponse
from .serializers import RecipeSerializer 
from rest_framework import viewsets      
from .models import Recipe 
        

class RecipeView(viewsets.ModelViewSet):  
    serializer_class = RecipeSerializer   
    queryset = Recipe.objects.all()   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    
    # def post(self, request, *args, **kwargs):
    #     name = request.data['name'] 
    #     image = request.data['image'] 
    #     calories = request.data['calories'] 
    #     description = request.data['description'] 
    #     nutriScore = request.data['nutriScore'] 
    #     rating = request.data['rating'] 
        
    #     Recipe.objects.create(name=name, image=image, calories=calories, description=description, nutriScore=nutriScore, rating=rating)
        
    #     return HttpResponse({"message": "Recipe created"}, status=200)
        
            
           