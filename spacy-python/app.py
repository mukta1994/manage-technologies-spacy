from __future__ import unicode_literals
from flask import Flask, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)

CORS(app)

from api import *

if __name__ == '__main__':
    app.debug = True
    app.run(host = '0.0.0.0',port=5005)