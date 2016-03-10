# coding:utf-8

from django.conf.urls import url

from . import views

urlpatterns = [
    # url(r'^$', views.test, name='main'),
    # url(r'^test$', views.main, name='test'),
    url(r'', views.main, name='index'),
]
