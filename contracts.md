# LEX PLEADERS INDIA - Backend Integration Contracts

## Overview
This document outlines the API contracts and integration strategy for LEX PLEADERS INDIA law firm website.

## Mock Data Status
Currently using mock data in `/app/frontend/src/mockData.js` for:
- Services (11 legal practice areas)
- Team Members (removed from display)
- Testimonials (3 client reviews)
- Blog Posts (3 articles)
- Office Images (4 photos)

## Backend APIs to Implement

### 1. Contact Form Submission
**Endpoint:** `POST /api/contact`
**Purpose:** Handle general inquiry contact form submissions
**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "subject": "string",
  "message": "string"
}
```
**Response:**
```json
{
  "success": true,
  "message": "Contact form submitted successfully",
  "id": "submission_id"
}
```
**MongoDB Collection:** `contact_submissions`

### 2. Consultation Booking
**Endpoint:** `POST /api/consultations`
**Purpose:** Handle consultation booking requests
**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "preferredDate": "date",
  "preferredTime": "time",
  "caseType": "string",
  "details": "string"
}
```
**Response:**
```json
{
  "success": true,
  "message": "Consultation booked successfully",
  "bookingId": "booking_id"
}
```
**MongoDB Collection:** `consultations`

### 3. Blog Posts Management
**Endpoints:**
- `GET /api/blog` - Get all blog posts
- `GET /api/blog/:id` - Get single blog post
- `POST /api/blog` - Create new blog post (admin)
- `PUT /api/blog/:id` - Update blog post (admin)
- `DELETE /api/blog/:id` - Delete blog post (admin)

**MongoDB Collection:** `blog_posts`

### 4. Testimonials Management
**Endpoints:**
- `GET /api/testimonials` - Get all testimonials
- `POST /api/testimonials` - Add new testimonial (admin)

**MongoDB Collection:** `testimonials`

## Database Models

### ContactSubmission
```python
{
  "_id": ObjectId,
  "name": str,
  "email": str,
  "phone": str,
  "subject": str,
  "message": str,
  "createdAt": datetime,
  "status": str  # "new", "contacted", "resolved"
}
```

### Consultation
```python
{
  "_id": ObjectId,
  "name": str,
  "email": str,
  "phone": str,
  "preferredDate": str,
  "preferredTime": str,
  "caseType": str,
  "details": str,
  "status": str,  # "pending", "confirmed", "completed", "cancelled"
  "createdAt": datetime
}
```

### BlogPost
```python
{
  "_id": ObjectId,
  "title": str,
  "excerpt": str,
  "content": str,
  "image": str,
  "category": str,
  "author": str,
  "date": datetime,
  "slug": str,
  "published": bool
}
```

### Testimonial
```python
{
  "_id": ObjectId,
  "name": str,
  "company": str,
  "text": str,
  "rating": int,
  "approved": bool,
  "createdAt": datetime
}
```

## Frontend Integration Steps

1. **Remove Mock Data Usage:**
   - Replace mock data imports with API calls in components
   - Use axios for HTTP requests
   - Implement loading states
   - Add error handling

2. **Update Components:**
   - `Contact.jsx` - Connect forms to POST endpoints
   - `Blog.jsx` - Fetch from GET /api/blog
   - `Testimonials.jsx` - Fetch from GET /api/testimonials

3. **Environment Variables:**
   - Use `REACT_APP_BACKEND_URL` for all API calls
   - Format: `${BACKEND_URL}/api/endpoint`

## Implementation Priority
1. Contact form submission (HIGH)
2. Consultation booking (HIGH)
3. Blog posts GET endpoint (MEDIUM)
4. Testimonials GET endpoint (MEDIUM)
5. Admin endpoints for blog/testimonials (LOW - Phase 2)

## Testing Checklist
- [ ] Contact form submission saves to database
- [ ] Consultation booking saves to database
- [ ] Email notifications sent on form submissions
- [ ] Data validation on all endpoints
- [ ] Error handling works correctly
- [ ] CORS configured properly
- [ ] Frontend displays success/error messages
