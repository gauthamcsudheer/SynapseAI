from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.sample import router as sample_router

app = FastAPI()

# CORS middleware to allow requests from the React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include the sample API route
app.include_router(sample_router, prefix="/api", tags=["Sample"])

@app.get("/")
async def root():
    return {"message": "Welcome to Synapse API"}
