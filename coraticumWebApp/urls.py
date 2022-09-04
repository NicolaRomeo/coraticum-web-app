from django.urls import path
from django.contrib import admin
from django.urls import path, re_path

import views

urlpatterns = [path('admin/', admin.site.urls),
               re_path('create-checkout-session', views.create_checkout_session),
               re_path('success', views.success)
               ]