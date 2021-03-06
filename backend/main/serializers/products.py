from rest_framework import serializers
from rest_polymorphic.serializers import PolymorphicSerializer


from main.models import Blocks, BlockImages, Image, BlockCards, BlockText, BlockCTA, DescriptionCards, \
    ProductTabs
from main.models.products import ProductCategories, Products, ProductFile


class BlocksSerializers(serializers.ModelSerializer):
    class Meta:
        model = Blocks
        fields = '__all__'


class BlocksImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = '__all__'


class BlockImagesSerializer(serializers.ModelSerializer):
    images = BlocksImagesSerializer(many=True, read_only=True)

    class Meta:
        model = BlockImages
        fields = ('id', 'spacing', 'title', 'images', 'page')


class DescriptionCardsSerializer(serializers.ModelSerializer):
    class Meta:
        model = DescriptionCards
        fields = '__all__'


class BlockCardsSerializer(serializers.ModelSerializer):
    block_card = DescriptionCardsSerializer(many=True, read_only=True)

    class Meta:
        model = BlockCards
        fields = '__all__'


class BlockTextSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlockText
        fields = '__all__'


class BlockCTASerializer(serializers.ModelSerializer):
    class Meta:
        model = BlockCTA
        fields = '__all__'


class BlocksPolymorphicSerializers(PolymorphicSerializer):
    model_serializer_mapping = {
        Blocks: BlocksSerializers,
        BlockCards: BlockCardsSerializer,
        BlockImages: BlockImagesSerializer,
        BlockText: BlockTextSerializer,
        BlockCTA: BlockCTASerializer,
    }


class ProductTabsSerializer(serializers.ModelSerializer):

    blocks = BlocksPolymorphicSerializers(many=True, read_only=True)

    class Meta:
        model = ProductTabs
        fields = ('title', 'description', 'blocks', 'slug')


class ProductListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = ('id', 'title', 'slug', 'developer', 'version', 'categories')


class ProductRetrieveSerializer(serializers.ModelSerializer):
    product_tabs = ProductTabsSerializer(many=True, read_only=True)

    class Meta:
        model = Products
        fields = '__all__'
        lookup_fields = 'slug'
        extra_kwargs = {
            'url': {'lookup_field': 'slug'}
        }


class ProductsCategoryRetrieveSerializers(serializers.ModelSerializer):
    products = ProductListSerializer(read_only=True, many=True)

    class Meta:
        model = ProductCategories
        fields = '__all__'


class ProductsCategoryListSerializers(serializers.ModelSerializer):
    products = ProductListSerializer(read_only=True, many=True)

    class Meta:
        model = ProductCategories
        fields = '__all__'


class ProductFileSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductFile
        fields = '__all__'
