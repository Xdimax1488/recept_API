from rest_framework import viewsets

from ..models import Category, Recipe
from ..serializers import CategorySerializer, RecipesSerializer, CategoryDatailSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    action_to_serializer = {
        "retrieve": CategoryDatailSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class

        )


class RecipesViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipesSerializer
