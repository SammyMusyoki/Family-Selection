from django.urls import path, include
from .views import create_product, create_category, get_categories, update_category, delete_category
# from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('products/create-product/', create_product, name='create-product'),
    path('category/create-category/', create_category, name='create-category'),
    path('category/update-category/<str:pk>/', update_category, name='update-category'),
    path('category/delete-category/<str:pk>/', delete_category, name='delete-category'),
    path('categories/', get_categories, name='get-categories'),
]
