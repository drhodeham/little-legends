from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

@app.route('/')
def landing():
    return 'Welcome to little legends'

if __name__ == '__main__':
    app.run(host='0.0.0.0')