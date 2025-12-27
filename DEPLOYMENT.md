# Deployment Guide - LEX PLEADERS INDIA

## 📋 Pre-Deployment Checklist

- [ ] All code is committed to GitHub
- [ ] Environment variables are documented
- [ ] Database is seeded with initial data
- [ ] Frontend build is tested locally
- [ ] Backend API endpoints are tested
- [ ] Contact forms are working
- [ ] Consultation booking is functional
- [ ] All images are loading correctly

## 🚀 Deployment Methods

### Method 1: Emergent Platform Deployment (Easiest)

**Pros:**
- One-click deployment
- Managed infrastructure (no server management)
- Automatic scaling
- Built-in monitoring
- Custom domain support
- MongoDB included

**Steps:**

1. **Deploy on Emergent:**
   - Use Emergent's deploy button in the interface
   - Cost: 50 credits per month
   - Your app will be live in minutes

2. **Get Your Live URL:**
   - Emergent provides a production URL
   - Example: `https://your-app.emergent.sh`

3. **Connect Custom Domain:**
   - Click "Link domain" in Emergent
   - Enter your domain name (e.g., `lexpleaders.in`)
   - Click on "Entri"
   - Follow DNS configuration instructions
   - Add CNAME or A records to your Hostinger DNS settings

4. **Update Environment Variables:**
   - Ensure `REACT_APP_BACKEND_URL` points to your production backend
   - Verify MongoDB connection string

### Method 2: Manual Deployment (Advanced)

#### Frontend Deployment (Vercel/Netlify)

**Option A: Vercel**

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Build frontend:
```bash
cd frontend
yarn build
```

3. Deploy:
```bash
vercel --prod
```

4. Set environment variables in Vercel dashboard:
   - `REACT_APP_BACKEND_URL=https://your-api-domain.com`

**Option B: Netlify**

1. Build frontend:
```bash
cd frontend
yarn build
```

2. Deploy via Netlify CLI or drag-and-drop:
```bash
netlify deploy --prod --dir=build
```

#### Backend Deployment (Railway/Render)

**Option A: Railway**

1. Create account at railway.app
2. Create new project
3. Add MongoDB service (or connect to Atlas)
4. Add backend service:
   - Root directory: `/backend`
   - Build command: `pip install -r requirements.txt`
   - Start command: `uvicorn server:app --host 0.0.0.0 --port $PORT`
5. Set environment variables:
   - `MONGO_URL`
   - `DB_NAME`
6. Deploy

**Option B: Render**

1. Create account at render.com
2. Create new Web Service
3. Connect GitHub repository
4. Configure:
   - Root directory: `backend`
   - Build command: `pip install -r requirements.txt`
   - Start command: `uvicorn server:app --host 0.0.0.0 --port $PORT`
5. Add environment variables
6. Deploy

#### Database Setup (MongoDB Atlas)

1. Create account at mongodb.com/atlas
2. Create new cluster (free tier available)
3. Create database user
4. Whitelist IP addresses (or allow all: 0.0.0.0/0)
5. Get connection string:
```
mongodb+srv://username:password@cluster.mongodb.net/lexpleaders
```
6. Update backend `.env` with connection string

### Method 3: Hostinger VPS (Advanced)

If you have a VPS plan with Hostinger:

#### Requirements:
- Ubuntu 20.04+ or similar
- Root/sudo access
- Domain pointed to VPS IP

#### Setup Steps:

1. **Install Node.js:**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

2. **Install Python:**
```bash
sudo apt update
sudo apt install python3 python3-pip python3-venv
```

3. **Install MongoDB:**
```bash
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt update
sudo apt install -y mongodb-org
sudo systemctl start mongod
sudo systemctl enable mongod
```

4. **Install Nginx:**
```bash
sudo apt install nginx
```

5. **Clone Repository:**
```bash
cd /var/www
sudo git clone <your-repo-url> lexpleaders
cd lexpleaders
```

6. **Setup Backend:**
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python seed_data.py
```

7. **Setup Frontend:**
```bash
cd ../frontend
npm install
npm run build
```

8. **Configure Nginx:**

Create `/etc/nginx/sites-available/lexpleaders`:

```nginx
server {
    listen 80;
    server_name lexpleaders.in www.lexpleaders.in;

    # Frontend
    location / {
        root /var/www/lexpleaders/frontend/build;
        try_files $uri $uri/ /index.html;
    }

    # Backend API
    location /api {
        proxy_pass http://localhost:8001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/lexpleaders /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

9. **Setup SSL (Let's Encrypt):**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d lexpleaders.in -d www.lexpleaders.in
```

10. **Setup Process Manager (PM2):**
```bash
sudo npm install -g pm2
cd /var/www/lexpleaders/backend
pm2 start "uvicorn server:app --host 0.0.0.0 --port 8001" --name lexpleaders-api
pm2 startup
pm2 save
```

## 🔧 Post-Deployment

### Testing

1. **Frontend:**
   - Visit your domain
   - Check all pages load correctly
   - Test navigation
   - Verify images display

2. **Backend API:**
   - Test contact form submission
   - Test consultation booking
   - Verify blog posts load
   - Check testimonials display

3. **Forms:**
   - Submit test contact form
   - Book test consultation
   - Check database for entries

### Monitoring

- Set up uptime monitoring (UptimeRobot, Pingdom)
- Configure error logging
- Monitor database performance
- Set up backup schedules

## 🆘 Troubleshooting

### Common Issues

**1. CORS Errors:**
```python
# In backend/server.py, update allowed origins:
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://yourdomain.com"],  # Update this
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

**2. API Not Connecting:**
- Check `REACT_APP_BACKEND_URL` in frontend `.env`
- Verify backend is running
- Check firewall rules

**3. Database Connection Failed:**
- Verify MongoDB is running
- Check connection string format
- Ensure IP whitelist includes your server

**4. Build Errors:**
- Clear cache: `npm cache clean --force`
- Delete node_modules and reinstall
- Check Node.js version compatibility

## 📞 Support

For deployment assistance:
- Check logs: `pm2 logs` (if using PM2)
- Review Nginx logs: `sudo tail -f /var/log/nginx/error.log`
- Contact your hosting provider

---

**Good luck with your deployment! 🚀**