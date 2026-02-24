from django.shortcuts import render
from .serializers import TodoSerializer
from rest_framework import viewsets
from .models import TodoModel
from django_filters.rest_framework import DjangoFilterBackend,SearchFilter


class TodoView(viewsets.ModelViewSet):
    queryset=TodoModel.objects.all()
    serializer_class=TodoSerializer
    filter_backend=[DjangoFilterBackend,SearchFilter]
    filterset_fields=['completed','title']
    search_fields=['title']
    
    
    
    
