from rest_framework import serializers

from main.models import CustomPages
from main.serializers.products import BlocksPolymorphicSerializers


class CustomPageSerializer(serializers.ModelSerializer):

    blocks = BlocksPolymorphicSerializers(many=True, read_only=True)

    class Meta:
        model = CustomPages
        fields = ('title', 'description', 'blocks')
        lookup_fields = 'slug'
        extra_kwargs = {
            'url': {'lookup_field': 'slug'}
        }
