from django.shortcuts import render
import pymongo
import urllib
import json
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.http import HttpResponse
from crud import select_all, insert_user
from django.shortcuts import redirect
from django.core.mail import send_mail
from django.conf import settings
import os
import stripe
from django.test import TestCase, override_settings
# Create your views here.
def index(request):
    return HttpResponse("<h1>Hello and welcome to my first <u>Django App</u> project!</h1>")
#stripe api key
#stripe.api_key = os.environ['STRIPE_KEY']

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



@override_settings(ENV_VALUE='HOTMAIL_PWD', ENVIRONMENT='local')
@api_view(['GET','POST'])
def send_email(request):
    data = json.loads(request.body)
    sender =data.get("sender", "no sender")
    email_body = data.get("email_body", "no body in request")
    email_body = email_body + "\n\n mail from {}".format(sender)
    response = {"email": "Thank your for your interest. We'll reach back ASAP."
                         "{0}:{1}".format(sender,email_body)}
    subject = 'Contact Form from Coraticum Website'
    email_from = settings.EMAIL_HOST_USER
    recipient_list = ["nicolaromeo1@gmail.com",] #sending to myself
    print("sending email")
    print("email user {}".format(email_from))
    print("email password {}".format(os.environ.get('ENV_VALUE', "")))
    #send_mail( subject, email_body, email_from, recipient_list, False,settings.EMAIL_HOST_USER,settings.EMAIL_HOST_PASSWORD  )
    res = Response(response, status=200)
    return res




