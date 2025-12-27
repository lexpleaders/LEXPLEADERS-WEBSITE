from pydantic import BaseModel, Field, EmailStr
from typing import Optional
from datetime import datetime
import uuid

# Contact Form Model
class ContactSubmissionCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    subject: str
    message: str

class ContactSubmission(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: str
    subject: str
    message: str
    status: str = "new"  # new, contacted, resolved
    createdAt: datetime = Field(default_factory=datetime.utcnow)

# Consultation Booking Model
class ConsultationCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    preferredDate: str
    preferredTime: str
    caseType: str
    details: str

class Consultation(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: str
    preferredDate: str
    preferredTime: str
    caseType: str
    details: str
    status: str = "pending"  # pending, confirmed, completed, cancelled
    createdAt: datetime = Field(default_factory=datetime.utcnow)

# Blog Post Model
class BlogPostCreate(BaseModel):
    title: str
    excerpt: str
    content: str
    image: str
    category: str
    author: str = "LEX PLEADERS Team"

class BlogPost(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    excerpt: str
    content: str
    image: str
    category: str
    author: str
    date: datetime = Field(default_factory=datetime.utcnow)
    slug: str
    published: bool = True

# Testimonial Model
class TestimonialCreate(BaseModel):
    name: str
    company: str
    text: str
    rating: int = 5

class Testimonial(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    company: str
    text: str
    rating: int
    approved: bool = True
    createdAt: datetime = Field(default_factory=datetime.utcnow)