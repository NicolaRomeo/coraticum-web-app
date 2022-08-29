from django.urls import path
from django.contrib import admin
from django.urls import path, re_path

from . import views

urlpatterns = [path('',views.index,name='index'),
               path('admin/', admin.site.urls),
               #POST OR GET A USER
               re_path(r'^api/users/$', views.users_list),
               re_path('create-checkout-session', views.create_checkout_session),
               re_path('success', views.success)
               ]