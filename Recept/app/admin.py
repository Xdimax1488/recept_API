from django.contrib import admin
from .models import *


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = 'name'


@admin.register(Recipe)
class RecipeAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'category', 'created', 'image')
    list_display_links = ('name', 'description', 'category', 'created')
    list_filter = ('name', 'description', 'category', 'created', 'image')
