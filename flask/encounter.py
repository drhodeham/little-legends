from flask import Blueprint, request
from database import db_session
from models import Encounter

encounter_routes = Blueprint('encounter', __name__, url_prefix='/encounter')

@encounter_routes.route('/', methods=['GET'])
def get_all_encounters():
    all = Encounter.query.all()
    return [e.json() for e in all]

@encounter_routes.route('/', methods=['POST'])
def create_or_update_encounter():
    json = request.json
    if isinstance(json, list):
        return [apply_to_database(e) for e in json]
    else:
        return apply_to_database(json)

def apply_to_database(data):
    if 'id' in data:
        encounter = Encounter.query.filter(Encounter.id == data['id']).first()
        encounter.name = data['name'] or encounter.name
        encounter.description = data['description'] or encounter.description
        encounter.tags = data['tags'] or encounter.tags
        db_session.commit()
    else:
        if 'name' not in data:
            return "A new encounter requires a name", 400
        encounter = Encounter(
            name=data['name'],
            description=(data['description'] or ''),
            tags=(data['tags'] or [])
        )
        db_session.add(encounter)
        db_session.commit()
    return encounter.json()