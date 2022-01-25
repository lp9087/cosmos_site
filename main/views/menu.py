from rest_framework.generics import GenericAPIView
from main.models import MenuItems


class MenuAPIView(GenericAPIView):
    queryset = MenuItems.objects.all()
