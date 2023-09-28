from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password

from ..models import Product, ProductCategory, ProductImage


class UserRegistrationSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True, validators=[UniqueValidator(queryset=User.objects.all())])


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model: ProductImage
        fields = ('image')


class CreateProductSerializer(serializers.ModelSerializer):
    images = ProductImageSerializer(many=True, read_only=True)
    class Meta:
        model = Product
        fields = '__all__'

class CreateCategorySerializer(serializers.ModelSerializer):
     class Meta:
         model = ProductCategory
         fields = '__all__'