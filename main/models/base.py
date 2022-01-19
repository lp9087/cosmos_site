from uuid import uuid4
from django.db import models


class IsActiveManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(is_active=True)


class BaseABSModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    is_active = models.BooleanField(
        'Активный',
        default=True,
        help_text='Определяет, следует ли считать эту запись активной. '
                  'Снимите этот флажок вместо удаления записи.'
    )

    objects = IsActiveManager()

    class Meta:
        abstract = True
