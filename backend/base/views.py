from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Product, ProductCategory
from .api.serializers import CreateProductSerializer, CreateCategorySerializer


# Create your views here.
@api_view(['POST'])
def create_category(request):

    if request.method == 'POST':
        serializer = CreateCategorySerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
def get_categories(request):
    categories = ProductCategory.objects.all()
    serializer = CreateCategorySerializer(categories, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET', 'PUT'])
def update_category(request, pk):
    try:
        category = ProductCategory.objects.get(pk=pk)
    except ProductCategory.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method =='GET':
        serializer = CreateCategorySerializer(category)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CreateCategorySerializer(instance=category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_category(request, pk):
    try:
        category = ProductCategory.objects.get(pk=pk)
    except ProductCategory.DoesNotExist:
        return Response({'error': 'Category not found'}, status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'DELETE':
        category.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    


@api_view(['POST'])
def create_product(request):
    
    if request.method == 'POST':
        serializer = CreateProductSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
