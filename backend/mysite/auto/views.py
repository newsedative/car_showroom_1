from django.shortcuts import render, get_object_or_404
from rest_framework.status import HTTP_201_CREATED
from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework import generics
from rest_framework.response import Response
from .models import *
from .serializers import *
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated


# Create your views here.


class AutoListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        cars = Auto.objects.all()
        serializer = AutoSerializer(cars, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        car = request.data
        serializers = AutoSerializer(data=car)
        if serializers.is_valid(raise_exception=True):
            cars_saved = serializers.save()
            if request.data.get('country_id'):
                car['country_id'] = int(request.data.get('country_id'))
                country = get_object_or_404(Country, id=car['country_id'])
                cars_saved.country = country
                cars_saved.save()
            return Response(AutoSerializer(cars_saved).data, status=HTTP_201_CREATED)


class AutoView(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, pk=None):
        car = get_object_or_404(Auto, pk=pk)
        car.delete()
        return Response({'ok': 'success'})


class CarPartViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]

    def list(self, request):
        queryset = CarPart.objects.all()
        serializer = CarPartSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrive(self, request, pk=None):
        queryset = CarPart.objects.all()
        car_parts = get_object_or_404(queryset, pk=pk)
        serializer = CarPartSerializer(car_parts)
        return Response(serializer.data)

    def delete(self, request, pk=None):
        car_part = get_object_or_404(CarPart, pk=pk)
        car_part.delete()
        return Response({'ok': 'success'})

    def post(self, request, *args, **kwargs):
        carpart = request.data
        serializers = CarPartSerializer(data=carpart)
        if serializers.is_valid(raise_exception=True):
            carparts_saved = serializers.save()
            if request.data.get('country_id'):
                carpart['country_id'] = int(request.data.get('country_id'))
                country = get_object_or_404(Country, id=carpart['country_id'])
                carparts_saved.country = country
                carparts_saved.save()
            return Response(CarPartSerializer(carparts_saved).data, status=HTTP_201_CREATED)

class CountryListView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Country.objects.all()
    serializer_class = CountrySerializer

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = CountrySerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = CountrySerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            country = serializer.save()
            data = CountrySerializer(country).data
            return Response(data, status=HTTP_201_CREATED)


class CountryView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Country.objects.all()
    serializer_class = CountrySerializer

    def delete(self, request, pk=None):
        country = get_object_or_404(Country, pk=pk)
        country.delete()
        return Response({'ok': 'success'})
