from django.db import models

# Create your models here.

class ShareHouse(models.Model):
    userRating = models.FloatField()
    capacityPersion = models.IntegerField()
    price = models.IntegerField()
    location = models.TextField()





