from .models import Recipe
from rest_framework import viewsets,permissions
from .serializers import RecipesSerializer


class RecipesViewSet(viewsets.ModelViewSet):
    quryset = Recipe.objects.all()
    permission_classes =[
        permissions.AllowAny
    ]
    serializer_class = RecipesSerializer