#!/usr/bin/env python3
"""
Backend API Testing for LEX PLEADERS INDIA Law Firm Website
Tests all backend APIs as specified in the review request
"""

import requests
import json
import sys
from datetime import datetime

# Backend URL from frontend/.env
BACKEND_URL = "https://lexindia.preview.emergentagent.com/api"

def test_root_endpoint():
    """Test the root API endpoint"""
    print("\n=== Testing Root Endpoint ===")
    try:
        response = requests.get(f"{BACKEND_URL}/")
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if "message" in data:
                print("✅ Root endpoint working correctly")
                return True
            else:
                print("❌ Root endpoint missing message field")
                return False
        else:
            print(f"❌ Root endpoint failed with status {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ Root endpoint error: {str(e)}")
        return False

def test_contact_form_submission():
    """Test contact form submission API"""
    print("\n=== Testing Contact Form Submission ===")
    
    # Test data
    contact_data = {
        "name": "Rajesh Kumar",
        "email": "rajesh.kumar@example.com",
        "phone": "+91-9876543210",
        "subject": "Legal Consultation Required",
        "message": "I need legal advice regarding a property dispute case. Please contact me at your earliest convenience."
    }
    
    try:
        response = requests.post(f"{BACKEND_URL}/contact", json=contact_data)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("success") == True and "message" in data:
                print("✅ Contact form submission working correctly")
                return True
            else:
                print("❌ Contact form response missing required fields")
                return False
        else:
            print(f"❌ Contact form submission failed with status {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ Contact form submission error: {str(e)}")
        return False

def test_consultation_booking():
    """Test consultation booking API"""
    print("\n=== Testing Consultation Booking ===")
    
    # Test data
    consultation_data = {
        "name": "Priya Sharma",
        "email": "priya.sharma@example.com",
        "phone": "+91-9123456789",
        "preferredDate": "2024-01-15",
        "preferredTime": "10:00 AM",
        "caseType": "Corporate Law",
        "details": "Need consultation for company incorporation and compliance matters. Looking for comprehensive legal guidance."
    }
    
    try:
        response = requests.post(f"{BACKEND_URL}/consultations", json=consultation_data)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("success") == True and "bookingId" in data:
                print("✅ Consultation booking working correctly")
                return True
            else:
                print("❌ Consultation booking response missing required fields")
                return False
        else:
            print(f"❌ Consultation booking failed with status {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ Consultation booking error: {str(e)}")
        return False

def test_blog_posts():
    """Test blog posts API"""
    print("\n=== Testing Blog Posts ===")
    
    try:
        response = requests.get(f"{BACKEND_URL}/blog")
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Number of blog posts returned: {len(data)}")
            
            if len(data) >= 3:
                # Check first blog post structure
                first_post = data[0]
                required_fields = ["id", "title", "excerpt", "image", "category", "author", "date"]
                missing_fields = [field for field in required_fields if field not in first_post]
                
                if not missing_fields:
                    print("✅ Blog posts API working correctly")
                    print(f"Sample post: {first_post['title']} by {first_post['author']}")
                    return True
                else:
                    print(f"❌ Blog posts missing required fields: {missing_fields}")
                    return False
            else:
                print(f"❌ Expected at least 3 blog posts, got {len(data)}")
                return False
        else:
            print(f"❌ Blog posts API failed with status {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ Blog posts API error: {str(e)}")
        return False

def test_testimonials():
    """Test testimonials API"""
    print("\n=== Testing Testimonials ===")
    
    try:
        response = requests.get(f"{BACKEND_URL}/testimonials")
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Number of testimonials returned: {len(data)}")
            
            if len(data) >= 3:
                # Check first testimonial structure
                first_testimonial = data[0]
                required_fields = ["id", "name", "company", "text", "rating"]
                missing_fields = [field for field in required_fields if field not in first_testimonial]
                
                if not missing_fields:
                    print("✅ Testimonials API working correctly")
                    print(f"Sample testimonial: {first_testimonial['name']} from {first_testimonial['company']}")
                    return True
                else:
                    print(f"❌ Testimonials missing required fields: {missing_fields}")
                    return False
            else:
                print(f"❌ Expected at least 3 testimonials, got {len(data)}")
                return False
        else:
            print(f"❌ Testimonials API failed with status {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ Testimonials API error: {str(e)}")
        return False

def run_all_tests():
    """Run all backend API tests"""
    print("🚀 Starting LEX PLEADERS INDIA Backend API Tests")
    print(f"Backend URL: {BACKEND_URL}")
    print("=" * 60)
    
    test_results = {
        "root_endpoint": test_root_endpoint(),
        "contact_form": test_contact_form_submission(),
        "consultation_booking": test_consultation_booking(),
        "blog_posts": test_blog_posts(),
        "testimonials": test_testimonials()
    }
    
    print("\n" + "=" * 60)
    print("📊 TEST SUMMARY")
    print("=" * 60)
    
    passed = 0
    total = len(test_results)
    
    for test_name, result in test_results.items():
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{test_name.replace('_', ' ').title()}: {status}")
        if result:
            passed += 1
    
    print(f"\nOverall Result: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All tests passed! Backend APIs are working correctly.")
        return True
    else:
        print("⚠️  Some tests failed. Please check the issues above.")
        return False

if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)