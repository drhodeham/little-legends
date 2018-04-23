from sqlalchemy import Column, Integer, String
from sqlalchemy.types import ARRAY
from database import Base

class Encounter(Base):
    __tablename__ = 'encounter'

    id = Column(Integer, primary_key=True)
    name = Column(String(), unique=True)
    description = Column(String(), default='')
    tags = Column(ARRAY(String()), default=[])

    def __init__(self, name, description, tags):
        self.name = name
        self.description = description
        self.tags = tags

    def __repr__(self):
        return '<Encounter id:{}>'.format(self.id)
    
    def json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'tags': self.tags
        }