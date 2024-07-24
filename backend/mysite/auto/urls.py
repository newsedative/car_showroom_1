from django.urls import path
from .views import AutoView, CarPartViewSet, CountryView, CountryListView, AutoListView

urlpatterns = [
    path('auto/', AutoListView.as_view()),
    path('auto/<int:pk>/', AutoView.as_view()),
    path('carpart/', CarPartViewSet.as_view({'get': 'list'})),
    path('carpart/<int:pk>/', CarPartViewSet.as_view({'get': 'retrive', 'delete': 'delete'})),
    path('country/', CountryListView.as_view()),
    path('country/<int:pk>/', CountryView.as_view()),
]
