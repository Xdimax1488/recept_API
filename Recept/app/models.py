from django.db import models


# Create your models here.


class Category(models.Model):
    name = models.CharField('категория', max_length=60)

    class Meta:
        verbose_name = 'категория'
        verbose_name_plural = 'категории'

    def __str__(self):
        return self.name


class Recipe(models.Model):
    name = models.CharField('название', max_length=256)
    description = models.TextField('описание', max_length=500, help_text='Не более 500 знаков')
    category = models.ForeignKey(Category, verbose_name='категория', on_delete=models.CASCADE)
    created = models.DateTimeField('добавлен', auto_now_add=True)
    image = models.ImageField('изображение', upload_to='images/items/%Y/%m/%d')

    class Meta:
        verbose_name = 'Рецепт'
        verbose_name_plural = 'Рецепты'

    def __str__(self):
        return f'{self.name},{self.description},{self.category},{self.created},{self.image}'

