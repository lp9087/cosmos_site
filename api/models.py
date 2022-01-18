from django.db import models
from django.contrib.auth import get_user_model


User = get_user_model()


class Categories(models.Model):
    name = models.CharField(max_length=200, verbose_name="Название категории")
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name


class Post(models.Model):
    text = models.TextField(u'Текст поста')
    pub_date = models.DateTimeField("Дата публикации", auto_now_add=True, db_index=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="post_author")
    group = models.ForeignKey(Categories, blank=True, null=True, verbose_name='Категории', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='posts/', blank=True, null=True)

    def __str__(self):
        return self.text
