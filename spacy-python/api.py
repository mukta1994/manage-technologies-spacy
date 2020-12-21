
from app import app
from flask import Flask,request,jsonify
from flask_restful import Resource, Api
import json
import spacy

api = Api(app)
nlp = spacy.load('en_core_web_lg') ## Loading model -- en_core_web_lg

class getChunks(Resource):
    def post(datas):
        doc = nlp(request.get_json()["text"])
        chunks=[chunk.text for chunk in doc.noun_chunks]
        return jsonify(chunks)



api.add_resource(getChunks, '/') # Route_1