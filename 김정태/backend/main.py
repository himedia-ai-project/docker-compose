from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from sqlalchemy import create_engine, Column, Integer
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# CORS 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 데이터베이스 연결
SQLALCHEMY_DATABASE_URL = f"mysql+pymysql://{os.getenv('MYSQL_USER')}:{os.getenv('MYSQL_PASSWORD')}@db/{os.getenv('MYSQL_DATABASE')}"
engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

# 카운터 모델
class Counter(Base):
    __tablename__ = "counters"
    id = Column(Integer, primary_key=True, index=True)
    count = Column(Integer, default=0)

# 데이터베이스 테이블 생성
Base.metadata.create_all(bind=engine)

@app.get("/count")
def get_count():
    db = SessionLocal()
    counter = db.query(Counter).first()
    if not counter:
        counter = Counter(count=0)
        db.add(counter)
        db.commit()
    count = counter.count
    db.close()
    return {"count": count}

@app.post("/increment")
def increment_count():
    db = SessionLocal()
    counter = db.query(Counter).first()
    if not counter:
        counter = Counter(count=1)
        db.add(counter)
    else:
        counter.count += 1
    db.commit()
    count = counter.count
    db.close()
    return {"count": count} 