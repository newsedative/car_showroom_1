from rest_framework import serializers
from .models import *


class AutoSerializer(serializers.ModelSerializer):
    country_name = serializers.CharField(source='country.country_name', read_only=True, required=False)

    class Meta:
        model = Auto
        fields = ('id', 'car_brand', 'car_model', 'country_id', 'country_name', 'price', 'created_date')


class CarPartSerializer(serializers.ModelSerializer):
    country_name = serializers.CharField(source='country.country_name', read_only=True, required=False)
    autos_name = serializers.ListField(source='get_autos_names', read_only=True, required=False)

    class Meta:
        model = CarPart
        fields = ('id', 'name', 'country_id', 'description', 'autos', 'country_name', 'autos_name')


class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ('id', 'country_name', 'code', 'currency')
