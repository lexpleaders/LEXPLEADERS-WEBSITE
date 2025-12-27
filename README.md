# LEX PLEADERS INDIA PRIVATE LIMITED

Professional law firm website with comprehensive legal services across North India.

![LEX PLEADERS Logo](https://customer-assets.emergentagent.com/job_c527c564-4a76-43f9-9636-63c3fbd13344/artifacts/diepdfxo_FINAL.png)

## 🌟 Features

- **Modern Design**: Professional white theme with Blue, Red, Gold, and Black color scheme
- **12 Practice Areas**: Comprehensive legal services from commercial litigation to startup advisory
- **Contact Forms**: Integrated contact and consultation booking systems
- **Blog System**: Legal insights and articles management
- **Client Testimonials**: Showcase client success stories
- **WhatsApp Integration**: Direct communication via WhatsApp (+919717718348)
- **Google Maps**: Office location integration
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Service pages with targeted keywords for Delhi-NCR market

## 🏗️ Tech Stack

### Frontend
- **React** (v19.0.0)
- **React Router DOM** (v7.5.1)
- **Axios** for API calls
- **Tailwind CSS** for styling
- **Shadcn UI** components
- **Lucide React** icons
- **Sonner** for toast notifications

### Backend
- **FastAPI** (v0.110.1)
- **Python** 3.x
- **Motor** (MongoDB async driver)
- **Pydantic** for data validation
- **CORS** middleware enabled

### Database
- **MongoDB** (via Motor async driver)

## 📁 Project Structure

```
/app
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/          # Shadcn UI components
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── Blog.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   ├── hooks/
│   │   ├── mockData.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.css
│   ├── package.json
│   ├── tailwind.config.js
│   └── .env
├── backend/
│   ├── server.py
│   ├── models.py
│   ├── seed_data.py
│   ├── requirements.txt
│   └── .env
├── contracts.md
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Python (v3.9 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

#### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd app
```

#### 2. Frontend Setup

```bash
cd frontend
yarn install
# or
npm install
```

Create `.env` file in frontend directory:

```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

#### 3. Backend Setup

```bash
cd backend
pip install -r requirements.txt
```

Create `.env` file in backend directory:

```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=lexpleaders
```

#### 4. Seed Database (Optional)

```bash
cd backend
python seed_data.py
```

This will populate your database with:
- 3 blog posts
- 3 testimonials

### Running the Application

#### Development Mode

**Terminal 1 - Frontend:**
```bash
cd frontend
yarn start
# or
npm start
```

**Terminal 2 - Backend:**
```bash
cd backend
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8001
- API Documentation: http://localhost:8001/docs

## 📡 API Endpoints

### Contact & Consultation

- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact submissions (admin)
- `POST /api/consultations` - Book consultation
- `GET /api/consultations` - Get all consultations (admin)

### Blog

- `GET /api/blog` - Get all published blog posts
- `GET /api/blog/:id` - Get single blog post
- `POST /api/blog` - Create blog post (admin)

### Testimonials

- `GET /api/testimonials` - Get all approved testimonials
- `POST /api/testimonials` - Add testimonial (admin)

## 🎨 Design System

### Color Palette

```css
--brand-blue-dark: #1e3a8a;
--brand-blue: #3b82f6;
--brand-red: #dc2626;
--brand-gold: #d97706;
--bg-primary: #ffffff;
--bg-secondary: #f8f9fa;
--text-primary: #1a1a1a;
--text-secondary: #4a5568;
```

### Typography

- Font Family: Inter, Arial, sans-serif
- Responsive sizing using clamp()
- Font weights: 400, 500, 600, 700, 800, 900

## 🌐 Deployment

### Frontend (Static Build)

```bash
cd frontend
yarn build
# or
npm run build
```

The `build` folder will contain production-ready static files.

### Backend (Production)

For production deployment:

```bash
uvicorn server:app --host 0.0.0.0 --port 8001
```

### Environment Variables (Production)

**Frontend `.env`:**
```env
REACT_APP_BACKEND_URL=https://your-backend-domain.com
```

**Backend `.env`:**
```env
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/
DB_NAME=lexpleaders
```

## 📦 Deployment Options

### Option 1: Emergent Platform (Recommended)
- One-click deployment
- Managed infrastructure
- Custom domain support
- Automatic scaling

### Option 2: Manual Deployment

**Frontend:**
- Vercel, Netlify, or any static hosting
- Build and upload the `build` folder

**Backend:**
- Railway, Render, DigitalOcean, or AWS
- Python 3.9+ environment required
- Install dependencies from requirements.txt

**Database:**
- MongoDB Atlas (recommended)
- Self-hosted MongoDB

## 🔒 Security Notes

- Never commit `.env` files to GitHub
- Use environment variables for sensitive data
- Enable CORS only for trusted domains in production
- Implement authentication for admin endpoints
- Use HTTPS in production

## 📱 Contact Information

- **Phone:** +919717718348
- **Email:** info@lexpleaders.in
- **Location:** Delhi NCR, India

## 🤝 Legal Services

1. Commercial & Corporate Litigation
2. Arbitration & Alternative Dispute Resolution
3. Real Estate, RERA & Land Disputes
4. Infrastructure & Construction Law
5. Insolvency & Bankruptcy (IBC)
6. Banking, Finance & Debt Recovery
7. White Collar Crime & Economic Offences
8. Civil & Criminal Litigation
9. Constitutional, Administrative & Writ Jurisdiction
10. Family, Matrimonial & Succession Law
11. Corporate Advisory & Contract Management
12. Start-Up Advisory (Monthly Retainership)

## 📄 License

Copyright © 2024 LEX PLEADERS INDIA PRIVATE LIMITED. All rights reserved.

## 🆘 Support

For technical support or inquiries:
- Open an issue in this repository
- Contact the development team

---

**Built with ❤️ for LEX PLEADERS INDIA PRIVATE LIMITED**