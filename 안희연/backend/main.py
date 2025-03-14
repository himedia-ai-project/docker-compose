from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from config.database import SessionLocal, engine, Base
from models import Counter # Entity import

Base.metadata.create_all(bind=engine)

app = FastAPI()

# CORS 설정 추가
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/count")
async def get_count(db: Session = Depends(get_db)):
    count_record = db.query(Counter).first()
    if count_record is None:
        count_record = Counter(count_value=0)
        db.add(count_record)
        db.commit()
        db.refresh(count_record)
    return {"count": count_record.count_value}

@app.post("/increment")
async def increment(db: Session = Depends(get_db)):
    count_record = db.query(Counter).first()
    if count_record is None:
        count_record = Counter(count_value=1)
        db.add(count_record)
    else:
        count_record.count_value += 1
    db.commit()
    db.refresh(count_record)
    return {"count": count_record.count_value}

@app.post("/decrement")
async def decrement(db: Session = Depends(get_db)):
    count_record = db.query(Counter).first()
    if count_record is None:
        count_record = Counter(count_value=0)
        db.add(count_record)
    else:
        count_record.count_value -= 1
    db.commit()
    db.refresh(count_record)
    return {"count": count_record.count_value}
