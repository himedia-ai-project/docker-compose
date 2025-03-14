from sqlalchemy import Column, Integer
from config.database import Base

class Counter(Base):
    __tablename__ = "counter"

    id = Column(Integer, primary_key=True, index=True)
    count_value = Column(Integer, default=0)
