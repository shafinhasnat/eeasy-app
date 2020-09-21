from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
import pymongo
from pymongo import MongoClient
import json
from bson import json_util
app = Flask(__name__)



app = Flask(__name__)
app.secret_key="sdfsdfsdf"
app.config['MONGO_DBNAME'] = 'eeasy'
app.config['MONGO_URI'] = 'mongodb://127.0.0.1:27017/eeasy'

mongo = PyMongo(app)
@app.route('/', methods=['GET'])
def get_all_frameworks():
    framework = mongo.db.shops 
    print(framework)
    output = []

    for q in framework.find():
        output.append({'key' : q['key'], 'title' : q['title'],'price' : q['price'], 'seller' : q['seller'], 'details' : q['details'], 'images': q['images']})

    return jsonify({'products' : output})
@app.route("/a",methods=["GET"])
def get_seeds():
	framework = mongo.db.shops
	all_items = list(framework.find({}))
	return  json.dumps(all_items, default=json_util.default)

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")