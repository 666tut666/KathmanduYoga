from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import Testimonial
from ..schemas import TestimonialCreate

router = APIRouter()

@router.get("/testimonials")
def read_testimonials(db: Session = Depends(get_db)):
    return db.query(Testimonial).all()

@router.post("/testimonials")
def create_testimonial(testimonial: TestimonialCreate, db: Session = Depends(get_db)):
    db_testimonial = Testimonial(name=testimonial.name, content=testimonial.content)
    db.add(db_testimonial)
    db.commit()
    db.refresh(db_testimonial)
    return db_testimonial
