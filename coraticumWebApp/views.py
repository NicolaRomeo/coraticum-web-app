from django.shortcuts import render
import pymongo
import urllib
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.http import HttpResponse
from .crud import select_all, insert_user
from django.shortcuts import redirect
import os
import stripe

# Create your views here.
def index(request):
    return HttpResponse("<h1>Hello and welcome to my first <u>Django App</u> project!</h1>")

#mongodb connection
connection_string = "mongodb+srv://coraticum-user-1231:"+urllib.parse.quote("md#230@sk!!e8RR") + "@coraticum-test-cluster.sum3xyv.mongodb.net/?retryWrites=true&w=majority"
client = pymongo.MongoClient(connection_string)
database = 'coraticumdatabase'
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

@api_view(['GET', 'POST'])
def users_list(request):
    collection = 'users'
    if request.method == 'GET':
        users_list = select_all(client, database, collection)

        return Response(users_list)

    elif request.method == 'POST':
        email = request.POST.get("email, 'test-user@gmail.com")
        pwd = request.POST.get("pwd, 'test-pwd")
        record = {
                    "email": email,
                    "pwd" : pwd
                 }
        try:
            result = insert_user(client, database, collection, record)
        except Exception as e:
            print(e)
        finally:
            if result:
                reponse = {"email" : "user registered successfully"}
                status_code = 200
            else:
                response = {"email" : "Error while registering the user"}
                status_code = status.HTTP_400_BAD_REQUEST
            return Response(response, status=status_code)

@api_view(['GET','POST'])
def create_checkout_session(request):
    customer = stripe.Customer.create()
    session = stripe.checkout.Session.create(
        mode='setup',
        payment_method_types=["card"],
        success_url='http://localhost:3000',
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




