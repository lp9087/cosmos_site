from main.models.base import BaseABSModel
from martor.models import MartorField


class Posts(BaseABSModel):
    content = MartorField()

    class Meta:
        verbose_name = 'Пост'
        verbose_name_plural = 'Посты'
