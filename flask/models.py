from sqlalchemy import Column, String, Integer
from sqlalchemy.types import ARRAY
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Encounter(Base):
    __tablename__ = 'encounter'

    id = Column(Integer, primary_key=True)
    name = Column(String, unique=True)
    description = Column(String, default='')
    tags = Column(ARRAY(String), default=[])

    def __init__(self, name, description):
        self.id = id
        self.description = description

    def __repr__(self):
        return '<Encounter id:{}>'.format(self.id)
