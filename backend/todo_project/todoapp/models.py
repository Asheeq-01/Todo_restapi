from django.db import models

class TodoModel(models.Model):
    title=models.CharField(max_length=50)
    descriptions=models.TextField()
    completed=models.BooleanField(default=False)
    is_created=models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title
    
    
    