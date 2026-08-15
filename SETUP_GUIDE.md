# ALICE Dashboard - Setup & Deployment Guide

## Project Overview
ALICE Dashboard is an administrator dashboard and analytics system built with React, Tailwind CSS, and Vite. It monitors and manages platform activities with real-time reporting and skill analytics.

### Features Implemented
✅ Admin Dashboard with widgets  
✅ User Statistics Display  
✅ Charts & Graphs (Bar, Pie, Line charts using Recharts)  
✅ Reports Management with export functionality  
✅ User Activity Monitoring  
✅ Skill Analytics with pie charts  
✅ Dashboard Widgets  
✅ Navigation with React Router  
✅ Tailwind CSS styling  

---

## Project Structure
```
dashboard-alice/
├── src/
│   ├── App.js                 # Main application with routing
│   ├── Dashboard.js           # Dashboard container with all widgets
│   ├── ChartsBox.js          # Bar chart component
│   ├── ReportsBox.js         # Reports management component
│   ├── SkillAnalytic.js      # Pie chart for skill analytics
│   ├── UserActivity.js       # Line chart for user activity
│   ├── UserStats.js          # User statistics display
│   ├── index.js              # React entry point
│   ├── index.css             # Global styles
│   ├── App.css               # App styles
│   └── style.css
├── backend/
│   ├── server.js             # Express backend server
│   └── package.json
├── public/
│   ├── index.html            # HTML entry point for Vite
│   ├── manifest.json
│   └── robots.txt
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
└── package.json
```

---

## Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Step 1: Install Frontend Dependencies
```bash
cd dashboard-alice
npm install
```

### Step 2: Install Backend Dependencies
```bash
cd backend
npm install
cd ..
```

### Step 3: Start the Development Environment

**Terminal 1 - Start Backend Server:**
```bash
cd backend
npm start
# Backend will run on http://localhost:5000
```

**Terminal 2 - Start Frontend Development Server:**
```bash
npm start
# Frontend will run on http://localhost:3002
# Vite will automatically open the browser
```

---

## Available Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Dashboard | Main dashboard with all widgets |
| `/reports` | ReportsBox | Reports management page |
| `/analytics` | SkillAnalytics | Skill analytics pie chart |
| `/activity` | UserActivity | User activity line chart |

---

## Backend API Endpoints

All endpoints return JSON data:

- **GET** `/api/health` - Health check
- **GET** `/api/dashboard` - Dashboard summary data
- **GET** `/api/analytics` - Skill analytics data
- **GET** `/api/activity` - User activity data
- **GET** `/api/reports` - Reports list

---

## Production Build

### Build Frontend
```bash
npm run build
# Output will be in the dist/ folder
```

### Build Backend
Backend runs as-is with Node.js

### Deploy
1. Build frontend: `npm run build`
2. Serve frontend from `dist/` folder (or push to CDN)
3. Deploy backend to a Node.js server
4. Update API endpoints in frontend if necessary

---

## Recent Fixes Applied

### ✅ Import Path Corrections
- Fixed App.js import: `./components/Dashboard` → `./Dashboard`
- Fixed component names to match actual filenames

### ✅ File Naming Standardization
- Renamed `user stats.js` → `UserStats.js`
- Renamed `chartsbox.js` → `ChartsBox.js`

### ✅ Dependencies Cleanup
- Removed conflicting `react-scripts` (CRA dependency)
- Removed testing library dependencies (for Vite setup)
- Kept only essential dependencies for Vite + React

### ✅ Configuration Verification
- Vite config properly configured with React plugin
- HTML entry point configured correctly
- Tailwind CSS fully integrated

---

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.8 | UI Framework |
| React Router | 7.18.2 | Navigation |
| Recharts | 3.10.1 | Charts & Graphs |
| Tailwind CSS | 3.4.19 | Styling |
| Vite | 8.2.1 | Build tool |
| Express.js | 4.21.2 | Backend server |

---

## Environment Variables (Backend)

Create `.env` file in `backend/` folder:
```
PORT=5000
NODE_ENV=development
```

---

## Troubleshooting

### 1. Backend Connection Fails
- Ensure backend is running on port 5000
- Check `package.json` dependencies are installed
- Run `npm install` in backend folder

### 2. Port Already in Use
- Frontend (default 3002): Change in `vite.config.js`
- Backend (default 5000): Change in `backend/.env` or `server.js`

### 3. Styling Not Applied
- Ensure Tailwind CSS is configured correctly
- Check `tailwind.config.js` for `content` paths
- Rebuild project if CSS isn't loading

### 4. Import Errors
- Verify component filenames match imports exactly
- Check for typos in import statements

---

## Next Steps / Enhancements

- [ ] Add database integration (MongoDB/PostgreSQL)
- [ ] Implement user authentication
- [ ] Add export reports functionality
- [ ] Real-time data updates with WebSockets
- [ ] Unit & integration tests
- [ ] Dockerize application
- [ ] Setup CI/CD pipeline

---

## Quick Start Command
```bash
# Install all dependencies
npm install
cd backend && npm install && cd ..

# Terminal 1 - Start backend
cd backend && npm start

# Terminal 2 - Start frontend
npm start
```

**Frontend URL:** http://localhost:3002  
**Backend API:** http://localhost:5000

---

Generated: August 2024
Project: ALICE Dashboard & Analytics
