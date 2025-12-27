import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from pathlib import Path
from datetime import datetime
import uuid

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

async def seed_blog_posts():
    """Seed initial blog posts"""
    blog_posts = [
        {
            "id": str(uuid.uuid4()),
            "title": "Recent Amendments to the Arbitration and Conciliation Act",
            "excerpt": "Understanding the impact of 2023 amendments on arbitration proceedings in India and what it means for commercial disputes.",
            "content": "The recent amendments to the Arbitration and Conciliation Act have brought significant changes...",
            "date": datetime(2024, 12, 15),
            "author": "LEX PLEADERS Team",
            "image": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=srgb&fm=jpg&q=85",
            "category": "Arbitration",
            "slug": "recent-amendments-to-the-arbitration-and-conciliation-act",
            "published": True
        },
        {
            "id": str(uuid.uuid4()),
            "title": "RERA Compliance: A Guide for Developers in Delhi-NCR",
            "excerpt": "Essential compliance requirements under RERA for real estate developers and common pitfalls to avoid.",
            "content": "RERA compliance is crucial for real estate developers operating in Delhi-NCR...",
            "date": datetime(2024, 12, 10),
            "author": "LEX PLEADERS Team",
            "image": "https://images.unsplash.com/photo-1619418602850-35ad20aa1700?crop=entropy&cs=srgb&fm=jpg&q=85",
            "category": "Real Estate",
            "slug": "rera-compliance-a-guide-for-developers-in-delhi-ncr",
            "published": True
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Supreme Court's Latest Ruling on Corporate Insolvency",
            "excerpt": "Analysis of the recent landmark judgment and its implications for IBC proceedings and creditor rights.",
            "content": "The Supreme Court's recent ruling on corporate insolvency has far-reaching implications...",
            "date": datetime(2024, 12, 5),
            "author": "LEX PLEADERS Team",
            "image": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=srgb&fm=jpg&q=85",
            "category": "Insolvency",
            "slug": "supreme-courts-latest-ruling-on-corporate-insolvency",
            "published": True
        }
    ]
    
    # Clear existing blog posts
    await db.blog_posts.delete_many({})
    
    # Insert new blog posts
    if blog_posts:
        await db.blog_posts.insert_many(blog_posts)
    
    print(f\"✓ Seeded {len(blog_posts)} blog posts\")

async def seed_testimonials():
    \"\"\"Seed initial testimonials\"\"\"
    testimonials = [
        {
            "id": str(uuid.uuid4()),
            "name": "Rajesh Kumar",
            "company": "ABC Developers Pvt Ltd",
            "text": "LEX PLEADERS handled our complex RERA dispute with exceptional expertise. Their strategic approach and deep knowledge of real estate law helped us achieve a favorable outcome.",
            "rating": 5,
            "approved": True,
            "createdAt": datetime.utcnow()
        },
        {
            "id": str(uuid.uuid4()),
            "name": "Priya Sharma",
            "company": "Tech Innovations Inc",
            "text": "Outstanding corporate advisory services. The team provided comprehensive legal support for our funding round and contract negotiations. Highly recommended!",
            "rating": 5,
            "approved": True,
            "createdAt": datetime.utcnow()
        },
        {
            "id": str(uuid.uuid4()),
            "name": "Amit Verma",
            "company": "XYZ Infrastructure Ltd",
            "text": "Their expertise in arbitration and construction law is unmatched. They successfully represented us in a high-stakes infrastructure dispute, saving us significant time and resources.",
            "rating": 5,
            "approved": True,
            "createdAt": datetime.utcnow()
        }
    ]
    
    # Clear existing testimonials
    await db.testimonials.delete_many({})
    
    # Insert new testimonials
    if testimonials:
        await db.testimonials.insert_many(testimonials)
    
    print(f\"✓ Seeded {len(testimonials)} testimonials\")

async def main():
    print(\"Starting database seeding...\")\n    await seed_blog_posts()\n    await seed_testimonials()\n    print(\"✓ Database seeding completed successfully!\")\n    client.close()\n\nif __name__ == \"__main__\":\n    asyncio.run(main())
