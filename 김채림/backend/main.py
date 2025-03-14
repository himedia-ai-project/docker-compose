from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

count = 0

class CountUpdate(BaseModel):
    count : int

@app.get("/count")
def get_count():
    return {"count": count}

@app.post("/count")
def update_count(data : CountUpdate):
    global count
    count = data.count
    return{"message" : "Count updated", "new_count" : count}