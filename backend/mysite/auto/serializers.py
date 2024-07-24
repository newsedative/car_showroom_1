from rest_framework import serializers
from .models import *


class AutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Auto
        fields = ('id', 'car_brand', 'car_model', 'country', 'price', 'created_date')


class CarPartSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarPart
        fields = ('id', 'name', 'country', 'description', 'autos')


class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ('id', 'country_name', 'code', 'currency')
