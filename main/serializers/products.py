from rest_framework import serializers
from rest_polymorphic.serializers import PolymorphicSerializer


from main.models import ProductPages, Blocks, BlockImages, Image, BlockCards, BlockText, BlockCTA, DescriptionCards
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


class ProductPagesSerializer(serializers.ModelSerializer):

    blocks = BlocksPolymorphicSerializers(many=True, read_only=True)

    class Meta:
        model = ProductPages
        fields = ('title', 'description', 'blocks')


class ProductListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = ('id', 'title', 'developer', 'version', 'categories')


class ProductRetrieveSerializer(serializers.ModelSerializer):
    product_pages = ProductPagesSerializer(many=True, read_only=True)

    class Meta:
        model = Products
        fields = '__all__'


class ProductsCategoryRetrieveSerializers(serializers.ModelSerializer):
    products = ProductListSerializer(read_only=True, many=True)

    class Meta:
        model = ProductCategories
        fields = '__all__'


class ProductsCategoryListSerializers(serializers.ModelSerializer):

    class Meta:
        model = ProductCategories
        fields = ('id', 'title', 'image')


class ProductFileSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductFile
        fields = '__all__'
