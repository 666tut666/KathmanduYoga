# KATHMANDU YOGA STUDIO DOCUMENTATION

=== PROJECT STRUCTURE ===

-- BACKEND --
backend/
├── app/
│   ├── database.py       # DB configuration
│   ├── models.py         # Data models (User, Course)
│   ├── routes/
│   │   ├── auth.py       # Authentication endpoints
│   │   ├── courses.py    # Course management
│   │   └── contact.py    # Contact forms
├── requirements.txt      # Python dependencies
└── .env.example          # Environment template

-- FRONTEND --
frontend/
├── public/static/images/   # Image assets
├── src/
│   ├── components/         # Reusable UI
│   ├── pages/             # Page components
│   ├── App.js             # Main router
│   └── apiService.js      # API client config

=== SETUP INSTRUCTIONS ===

1. BACKEND SETUP:
```bash
pip install -r requirements.txt
cp .env.example .env  # Update with your credentials
python init_db.py
uvicorn app.main:app --reload
```

2. FRONTEND SETUP:
```bash
cd frontend
npm install
npm start
```

=== API ENDPOINTS ===

[Authentication]
POST /auth/login       - User login (JWT)
POST /auth/register    - New user registration

[Content Management]
GET /courses           - List all courses
POST /testimonials     - Submit new testimonial
GET /users/me          - Get current user profile

=== ENVIRONMENT VARIABLES ===
```ini
# .env file configuration
DATABASE_URL=postgresql://user:password@localhost/yoga_db
JWT_SECRET=your_secure_secret_key_here
ALLOWED_ORIGINS=http://localhost:3000
```

=== CODE EXAMPLES ===

1. User Model (backend/models.py):
```python
class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    email = Column(String, unique=True)
    hashed_password = Column(String)
    is_admin = Column(Boolean, default=False)
```

2. API Client (frontend/apiService.js):
```javascript
// Configure request interceptor
API.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
```

=== TROUBLESHOOTING ===

1. Database Connection Issues:
   - Verify PostgreSQL service is running
   - Check .env file values match DB credentials
   - Run: python init_db.py --force

2. Frontend API Errors:
   - Confirm backend server is running
   - Check browser console for CORS errors
   - Validate JWT token in localStorage

3. Dependency Conflicts:
   - Delete venv/ and node_modules/
   - Reinstall using pip/npm commands

=== TESTING ===
```bash
# Backend tests
pytest app/tests/

# Frontend tests
cd frontend && npm test
```

# Backend
python -m pip install -r requirements.txt

# Frontend
npm ci --legacy-peer-deps

=== DOCKER SETUP ===
```bash
# Build and start containers
docker-compose up --build

# Stop containers
docker-compose down

# Production build with Nginx
docker-compose -f docker-compose.prod.yml up --build
```

=== ACCESS ENDPOINTS ===
```bash
# After Docker setup:
Web Interface: http://localhost
API Docs: http://localhost/api/docs
Admin Portal: http://localhost/admin
```

=== NGINX CONFIGURATION ===
Key routing rules:
- /api/* → Backend service (8000)
- /* → Frontend service (3000)
- WebSocket support enabled
- Gzip compression enabled

=== ENVIRONMENT VARIABLES ===
```ini
# Core services
POSTGRES_USER=user
POSTGRES_PASSWORD=password
POSTGRES_DB=yoga_db

# Backend specific
JWT_SECRET=your_secure_secret_key_here
JWT_EXPIRE_MINUTES=1440
```

=== DEVELOPMENT WORKFLOW ===
```bash
# Start with hot-reload
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

# Key development features:
- Backend code changes trigger automatic reload
- Frontend updates visible without container rebuild
- Preserved virtualenv between sessions
- Debug logging enabled
```

# Start development stack
docker-compose up --build

# After making code changes:
# - Backend: Automatic reload within 1-2 seconds
# - Frontend: Browser auto-refresh via React fast refresh
# - Database: Persistent storage between restarts
