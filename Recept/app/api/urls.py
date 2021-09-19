from django.urls import path
from rest_framework import routers
from .views import CategoryViewSet, RecipesViewSet

router = routers.SimpleRouter()
router.register('category', CategoryViewSet, basename='category')
router.register('recipes', RecipesViewSet, basename='recipes')

urlpatterns = []

urlpatterns += router.urls
