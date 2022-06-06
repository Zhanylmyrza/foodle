from django.contrib import admin
from django.urls import path,include               
from rest_framework import routers                 
from foodle import views     
from django.conf.urls.static import static
from django.conf import settings                        

router = routers.DefaultRouter()                   
router.register(r'recipes', views.RecipeView, 'recipe')  
#Performing CRUD operations to our items #router.urls provides routing for our API.

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('register/', include('foodle.urls'))           
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

#https://www.youtube.com/watch?v=Sc1KKe1Pguw&t=1385s