from fastapi import FastAPI
from app.routes import auth, courses, testimonials, contact
from app.database import Base, engine

# Create all tables in the database
Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(auth.router, prefix="/auth", tags=["Auth"])
app.include_router(courses.router, prefix="/courses", tags=["Courses"])
app.include_router(testimonials.router, prefix="/testimonials", tags=["Testimonials"])
app.include_router(contact.router, prefix="/contact", tags=["Contact"])

# Run the app with the command `uvicorn backend.main:app --reload`