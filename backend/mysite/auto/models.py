from django.db import models

class Auto(models.Model):
    car_brand = models.CharField(verbose_name='Марка автомобиля', max_length=100)
    car_model = models.CharField(verbose_name='Модель автомобиля', max_length=100)
    country = models.ForeignKey('Country', on_delete=models.SET_NULL, verbose_name='Страна производства', null=True)
    price = models.IntegerField(verbose_name='Стоимость')
    created_date = models.DateTimeField(verbose_name='Дата добавления записи', auto_now=True)

    def __str__(self):
        return self.car_brand


class CarPart(models.Model):
    name = models.CharField(verbose_name='Наименование', max_length=200)
    country = models.ForeignKey('Country', on_delete=models.SET_NULL, verbose_name='Страна производства', null=True)
    description = models.TextField(verbose_name='Описание', max_length=1000)
    autos = models.ManyToManyField('Auto', verbose_name='Подходит для автомобилей', blank=True)

    def __str__(self):
        return self.name


class Country(models.Model):
    country_name = models.CharField(verbose_name='Название страны', max_length=100)
    code = models.CharField(verbose_name='Код страны', max_length=10)
    currency = models.CharField(verbose_name='Валюта', max_length=50)

    def __str__(self):
        return self.country_name
