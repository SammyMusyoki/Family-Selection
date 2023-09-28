from django.contrib import admin
from .models import Product, CreditedProducts, CreditedUserProfile, ProductCategory

# Register your models here.
admin.site.register(Product)
admin.site.register(ProductCategory)
admin.site.register(CreditedProducts)
admin.site.register(CreditedUserProfile)
