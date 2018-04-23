from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

from response import ResponseJSON
from database import db_session
from encounter import encounter_routes

app = Flask(__name__)
app.response_class = ResponseJSON
CORS(app)

app.register_blueprint(encounter_routes)

@app.route('/')
def landing():
    return 'Welcome to little legends'

@app.teardown_appcontext
def shutdown_session(exception=None):
    db_session.remove()


if __name__ == '__main__':
    app.run(host='0.0.0.0')