from django.shortcuts import render
import pymongo
import urllib
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.http import HttpResponse
from crud import select_all, insert_user
from django.shortcuts import redirect
import os
import stripe

# Create your views here.
def index(request):
    return HttpResponse("<h1>Hello and welcome to my first <u>Django App</u> project!</h1>")
#stripe api key
stripe.api_key = "sk_test_51Lc7LSFNhDR4ffVKYYm8RmTGTbeSUATm8AHKsJCK4ylKSFANpNcjy7GNQ0Z0w3qS5jUcJHQ12FKNk5j2bE30gbqo003Hdb4hXo"

'''
collection = 'dummycollection'
mydb = client[database]
collection = mydb[collection]

mascot_1={
    "name": "Sammy",
    "type" : "Shark"
}
collection.insert_one(mascot_1)

mascot_details = collection.find({})

for r in mascot_details:
    print(r['name'])
'''

@api_view(['GET','POST'])
def create_checkout_session(request):
    customer = stripe.Customer.create()
    session = stripe.checkout.Session.create(
        mode='setup',
        payment_method_types=["card"],
        success_url='http://178.128.146.122:80',
        cancel_url='https://example.com/cancel',
        customer = customer.id,
        shipping_address_collection={
            'allowed_countries': ['US', 'CA', 'IT','FR'],
        }
    )

    return redirect(session.url, code=303)

@api_view(['GET'])
def success(request):
    response = {"email": "Order registered. You will receive a notification as soon as the product is available \n"
            "Thank you for choosing quality"}
    res = Response(response, status=200)
    return res




