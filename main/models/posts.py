from main.models.base import BaseABSModel
from martor.models import MartorField


class Posts(BaseABSModel):
    content = MartorField()
