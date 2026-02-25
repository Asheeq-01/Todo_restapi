from django.shortcuts import render
from .serializers import TodoSerializer
from rest_framework import viewsets
from .models import TodoModel
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter
from rest_framework.decorators import action
from rest_framework.response import Response



class TodoView(viewsets.ModelViewSet):
    queryset=TodoModel.objects.all()
    serializer_class=TodoSerializer
    filter_backends=[DjangoFilterBackend,SearchFilter]
    filterset_fields=['completed','title']
    search_fields=['title']
    
    
    @action(detail=True,methods=['post'])
    def toggle(self,request,pk=None):
        todo=self.get_object()
        todo.completed=not todo.completed
        todo.save()
        return Response({'message':'Todo status toggled','complete':todo.completed})
    
    
    
