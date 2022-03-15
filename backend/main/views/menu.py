from rest_framework.generics import ListAPIView
from rest_framework.response import Response

from main.models import MenuItems
from main.serializers.menu import MenuItemSerializer


class MenuAPIView(ListAPIView):
    queryset = MenuItems.objects.all()
    serializer_class = MenuItemSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
