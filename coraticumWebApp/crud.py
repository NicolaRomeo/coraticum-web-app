import pymongo
import urllib

'''
insert one
insert many
select_all
select_fields
'''
def insert_user(myclient,database, collection, record):
    #check if database exist
    dblist = myclient.list_database_names()
    if "coraticum-test-cluster" in dblist:
        print("The database exists.")

    #create database
    #mongodb will wait until a collection is created before creating the database
    mydb = myclient[database]

    #check that collection exists
    collist = mydb.list_collection_names()
    if "customers" in collist:
        print("The collection exists.")

    #create a collection
    #mongodb will wait until a document is inserted before actually creating the collection
    mycol = mydb[collection]

    #insert a record in the collection
    mydict = record

    x = mycol.insert_one(mydict)


def insert_many(myclient,database, collection, list_of_records):
    #check if database exist
    dblist = myclient.list_database_names()
    if "mydatabase" in dblist:
        print("The database exists.")

    #create database
    #mongodb will wait until a collection is created before creating the database
    mydb = myclient[database]

    #check that collection exists
    collist = mydb.list_collection_names()
    if "customers" in collist:
        print("The collection exists.")

    #create a collection
    #mongodb will wait until a document is inserted before actually creating the collection
    mycol = mydb[collection]

    #insert a record in the collection
    mydicts = list_of_records

    x = mycol.insert_many(mydicts)

#finds all documents in a collection
def select_all(myclient, database, collection):
    mydb = myclient[database]
    mycol = mydb[collection]
    for x in mycol.find():
        print(x)

#select only given fields
#takes list of fields as input
def select_field(myclient, database, collection, list_of_fields):
    mydb = myclient[database]
    mycol = mydb[collection]
    for x in mycol.find({}, {"_id": 0, "name": 1, "address": 1}):
        print(x)

#will only delete one if multiple records match the query
def delete_one(myclient, database, collection,myquery):

    mydb = myclient[database]
    mycol = mydb[collection]

    mycol.delete_one(myquery)

#delete many records/documents
def delete_many(myclient, database, collection,myquery):

    mydb = myclient[database]
    mycol = mydb[collection]
    x = mycol.delete_many(myquery)

    print(x.deleted_count, " documents deleted.")

def delete_all(myclient, database, collection,myquery):
    mydb = myclient[database]
    mycol = mydb[collection]
    x = mycol.delete_many({})

    print(x.deleted_count, " documents deleted.")

#takes as input the query and the new values
def update_one(myclient, database, collection,myquery,newvalues):

    mydb = myclient[database]
    mycol = mydb[collection]

    mycol.update_one(myquery, newvalues)

    #prints updated record
    # print "customers" after the update:
    for x in mycol.find():
        print(x)

#when the query returns more than one result,
#we should use update_many
def update_many(myclient, database, collection,myquery,newvalues):

    mydb = myclient[database]
    mycol = mydb[collection]

    x = mycol.update_many(myquery, newvalues)

    print(x.modified_count, "documents updated.")