from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from models import (
    ContactSubmission, ContactSubmissionCreate,
    Consultation, ConsultationCreate,
    BlogPost, BlogPostCreate,
    Testimonial, TestimonialCreate
)
from typing import List
from datetime import datetime

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Health check endpoint (for Kubernetes probes)
@app.get("/health")
async def health_check():
    """Health check endpoint for Kubernetes liveness and readiness probes"""
    try:
        # Check database connectivity
        await db.command('ping')
        return {
            "status": "healthy",
            "service": "LEX PLEADERS INDIA API",
            "database": "connected"
        }
    except Exception as e:
        logger.error(f"Health check failed: {str(e)}")
        return {
            "status": "unhealthy",
            "service": "LEX PLEADERS INDIA API",
            "database": "disconnected",
            "error": str(e)
        }

# Root endpoint
@api_router.get("/")
async def root():
    return {"message": "LEX PLEADERS INDIA API - Legal Services Platform"}

# ==================== CONTACT FORM ENDPOINTS ====================

@api_router.post("/contact", response_model=dict)
async def create_contact_submission(contact: ContactSubmissionCreate):
    """Handle contact form submissions"""
    try:
        contact_dict = contact.dict()
        contact_obj = ContactSubmission(**contact_dict)
        
        # Insert into database
        await db.contact_submissions.insert_one(contact_obj.dict())
        
        logger.info(f"New contact submission from {contact.name} - {contact.email}")
        
        return {
            "success": True,
            "message": "Thank you for contacting us. We'll get back to you soon.",
            "id": contact_obj.id
        }
    except Exception as e:
        logger.error(f"Error creating contact submission: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to submit contact form")

@api_router.get("/contact", response_model=List[ContactSubmission])
async def get_contact_submissions():
    """Get all contact submissions (admin)"""
    try:
        submissions = await db.contact_submissions.find().sort("createdAt", -1).to_list(1000)
        return [ContactSubmission(**sub) for sub in submissions]
    except Exception as e:
        logger.error(f"Error fetching contact submissions: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch contact submissions")

# ==================== CONSULTATION BOOKING ENDPOINTS ====================

@api_router.post("/consultations", response_model=dict)
async def create_consultation(consultation: ConsultationCreate):
    """Handle consultation booking requests"""
    try:
        consultation_dict = consultation.dict()
        consultation_obj = Consultation(**consultation_dict)
        
        # Insert into database
        await db.consultations.insert_one(consultation_obj.dict())
        
        logger.info(f"New consultation booking from {consultation.name} - {consultation.caseType}")
        
        return {
            "success": True,
            "message": "Your consultation request has been received. We'll confirm shortly.",
            "bookingId": consultation_obj.id
        }
    except Exception as e:
        logger.error(f"Error creating consultation: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to book consultation")

@api_router.get("/consultations", response_model=List[Consultation])
async def get_consultations():
    """Get all consultation bookings (admin)"""
    try:
        consultations = await db.consultations.find().sort("createdAt", -1).to_list(1000)
        return [Consultation(**cons) for cons in consultations]
    except Exception as e:
        logger.error(f"Error fetching consultations: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch consultations")

# ==================== BLOG ENDPOINTS ====================

@api_router.get("/blog", response_model=List[BlogPost])
async def get_blog_posts():
    """Get all published blog posts"""
    try:
        posts = await db.blog_posts.find({"published": True}).sort("date", -1).to_list(100)
        return [BlogPost(**post) for post in posts]
    except Exception as e:
        logger.error(f"Error fetching blog posts: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch blog posts")

@api_router.get("/blog/{post_id}", response_model=BlogPost)
async def get_blog_post(post_id: str):
    """Get a single blog post by ID"""
    try:
        post = await db.blog_posts.find_one({"id": post_id})
        if not post:
            raise HTTPException(status_code=404, detail="Blog post not found")
        return BlogPost(**post)
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching blog post: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch blog post")

@api_router.post("/blog", response_model=BlogPost)
async def create_blog_post(post: BlogPostCreate):
    """Create a new blog post (admin)"""
    try:
        post_dict = post.dict()
        # Generate slug from title
        slug = post.title.lower().replace(" ", "-").replace("'", "").replace(",", "")
        post_dict["slug"] = slug
        
        blog_post = BlogPost(**post_dict)
        await db.blog_posts.insert_one(blog_post.dict())
        
        logger.info(f"New blog post created: {post.title}")
        return blog_post
    except Exception as e:
        logger.error(f"Error creating blog post: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to create blog post")

# ==================== TESTIMONIALS ENDPOINTS ====================

@api_router.get("/testimonials", response_model=List[Testimonial])
async def get_testimonials():
    """Get all approved testimonials"""
    try:
        testimonials = await db.testimonials.find({"approved": True}).sort("createdAt", -1).to_list(100)
        return [Testimonial(**test) for test in testimonials]
    except Exception as e:
        logger.error(f"Error fetching testimonials: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch testimonials")

@api_router.post("/testimonials", response_model=Testimonial)
async def create_testimonial(testimonial: TestimonialCreate):
    """Create a new testimonial"""
    try:
        testimonial_dict = testimonial.dict()
        testimonial_obj = Testimonial(**testimonial_dict)
        
        await db.testimonials.insert_one(testimonial_obj.dict())
        
        logger.info(f"New testimonial from {testimonial.name} - {testimonial.company}")
        return testimonial_obj
    except Exception as e:
        logger.error(f"Error creating testimonial: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to create testimonial")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()