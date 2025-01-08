from fastapi import FastAPI
from app.routes.sample import router as sample_router

app = FastAPI()

app.include_router(sample_router, prefix="/api", tags=["Sample"])

@app.get("/")
async def root():
    return {"message": "Welcome to Synapse API"}
