from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class ProductCategory(models.Model):
    category_name = models.CharField(max_length=255)

class ProductImage(models.Model):
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='product_images/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Image for {self.product.product_name}"

class Product(models.Model):
    product_name = models.CharField(max_length=100)
    product_category = models.ForeignKey(ProductCategory, on_delete=models.CASCADE)
    description = models.TextField(max_length=1000)
    product_images = models.ManyToManyField(ProductImage, related_name='product_images', blank=True)
    buying_price = models.FloatField()
    selling_price = models.FloatField()
    quantity = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.product_name



class CreditedUserProfile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    id_no = models.CharField(max_length=15)
    phone_number = models.CharField(max_length=15)
    profile_image = models.ImageField(default='default.jpg', upload_to='profile_images')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class CreditedProducts(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)