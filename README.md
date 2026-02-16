# Sustainability Intelligence Dashboard (SID)

A modern, cloud-based sustainability monitoring platform designed for eco-conferencing and environmental impact tracking in Kenya.

## 🌍 Features

- **Real-time Monitoring**: Track energy, water, waste, and GHG emissions
- **Premium Dashboard**: Interactive KPI cards and data visualization
- **Kenya Context**: Aligned with Green Economy Strategy and Vision 2030
- **Cloud Database**: MongoDB Atlas for scalable data persistence
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Production Ready**: Built with React 18, Node.js, and Express

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm
- MongoDB Atlas account (free tier works)

### Installation

1. **Clone and Install Dependencies**
```bash
# Backend
cd backend
npm install

# Frontend  
cd ../frontend
npm install
```

2. **Environment Setup**
```bash
# Backend (.env)
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/sustainability_dashboard
PORT=5000
NODE_ENV=development

# Frontend (.env)
PORT=3030
VITE_API_URL=http://localhost:5000
```

3. **Start the Application**
```bash
# Terminal 1 - Backend
cd backend
npm start

# Terminal 2 - Frontend
cd frontend
npm start
```

4. **Access the Application**
- Frontend: http://localhost:3030
- Backend API: http://localhost:5000

## 📊 API Endpoints

- `GET /api/indicators` - Historical sustainability data
- `GET /api/indicators/sensors` - Current sensor readings

## 🌐 Deployment

### Frontend (Vercel)
```bash
cd frontend
npm run build
# Deploy build/ folder to Vercel
```

### Backend (Heroku/Railway)
```bash
cd backend
# Set MONGO_URI environment variable
# Deploy to Heroku or Railway
```

## 🛠️ Tech Stack

**Frontend:**
- React 18.3.1
- React Router DOM 6.28.0
- Chart.js 4.4.0
- Bootstrap 5.3.0

**Backend:**
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

## 📱 Responsive Design

- Desktop: Full dashboard experience
- Tablet: Optimized layout
- Mobile: Touch-friendly interface

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📄 License

This project is licensed under the MIT License.
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

### 2. Seed Sample Data (Optional but Recommended)

To populate the database with 5 sample indicator records:

```bash
cd backend
node seed.js
```

You should see output confirming that 5 indicators were inserted.

### 3. Start the Backend Server

In one terminal window:

```bash
cd backend
npm start
```

You should see:
```
✅ MongoDB connected
🚀 Server running on port 5000
```

### 4. Start the Frontend Development Server

In a second terminal window:

```bash
cd frontend
npm start
```

The frontend will automatically open in your browser at `http://localhost:3000`.

---

## Features

### Dashboard (Frontend)
- **Real-time KPI Cards:** Renewable Energy %, Water Usage, Waste Diverted, GHG Emissions
- **Trend Indicators:** Visual arrows (▲▼►) showing direction of change
- **Target Tracking:** Color-coded (green/red) performance against targets
- **Impact Equivalence:** Tree planting and home power calculations
- **Data Table:** Historical records with date and metrics

### Form (Frontend)
- **Validated input fields** with numeric constraints
- **Loading state** while saving
- **Auto-refresh** of dashboard after adding new indicators
- **Success/error messages** with auto-dismiss

### API (Backend)
- **GET /api/indicators** — Retrieve all indicators (sorted by newest first)
- **POST /api/indicators** — Create a new indicator record
- **CORS enabled** for cross-origin requests from frontend

---

## Testing the Flow

1. **View Dashboard:** Open the app; you should see the 5 seeded indicators displayed
2. **Add New Data:** Fill in the form with values (e.g., 70, 25, 80, 5) and click "Save"
3. **Auto-Refresh:** The dashboard updates automatically with the new record
4. **Check API:** Visit `http://localhost:5000/api/indicators` in the browser to see raw JSON

---

## Project Structure

```
backend/
├── server.js                   # Express server with CORS and routes
├── models/
│   └── Indicator.js           # Mongoose schema for sustainability metrics
├── controllers/
│   └── indicatorController.js # GET/POST logic for indicators
├── routes/
│   └── indicators.js           # API route definitions
├── seed.js                     # Script to populate sample data
└── package.json               # Node dependencies

frontend/
├── src/
│   ├── App.jsx                # Main app with ref to Dashboard
│   ├── components/
│   │   ├── Dashboard.js       # KPI display and data visualization
│   │   ├── IndicatorForm.js   # Form to add new indicators
│   │   ├── Chart.js           # Placeholder chart component
│   │   ├── Map.js             # Placeholder map component
│   │   └── Reports.js         # Placeholder reports component
│   └── index.js               # React entry point
├── package.json               # React dependencies
└── vite.config.js / eslint.config.js  # Build and linting config
```

---

## Key Improvements Made

### Backend
✅ Added CORS support for frontend-backend communication  
✅ Implemented working `GET /api/indicators` endpoint returning real data  
✅ Implemented working `POST /api/indicators` endpoint to save new records  
✅ Created seed script to populate 5 sample records from Mongo  

### Frontend
✅ Exposed `fetchData()` method via ref so parent component can refresh dashboard  
✅ Enhanced `IndicatorForm` with input validation, error handling, and disabled submit while loading  
✅ Enhanced `Dashboard` with loading spinner, error state, and empty state UI  
✅ Improved styling (grids, colors, responsive layout)  
✅ Added auto-refresh on successful form submission  

### Documentation
✅ Created comprehensive proposal document (`PROPOSAL.md`) ready for grant submissions  
✅ Detailed budget breakdown, timeline, and sustainability model  
✅ Team roles and risk mitigation strategies  

---

## Environment Variables

Create a `.env` file in the `backend/` folder if needed:

```env
MONGO_URI=mongodb://localhost:27017/sustainability_dashboard
PORT=5000
```

Default values are hardcoded in `server.js` if `.env` is not provided.

---

## Troubleshooting

### Backend won't start
- Ensure MongoDB is running: `mongod`
- Check that port 5000 is not in use: `netstat -ano | findstr :5000`
- Verify dependencies are installed: `npm install` in `backend/`

### Frontend won't start
- Delete `node_modules` and `package-lock.json`, then run `npm install` again
- Ensure port 3000 is not in use

### Dashboard shows "No data" or "Loading..."
- Verify backend is running: `curl http://localhost:5000/` or visit in browser
- Run seed script: `node backend/seed.js`
- Check browser console (F12) for API errors
- Check backend console for Mongo connection errors

### Form submission fails
- Check that backend is running on port 5000
- Verify network tab in browser dev tools (F12) to see POST request details
- Look at backend console for error messages

---

## Next Steps & Future Enhancements

### Short-term (Ready to implement)
- [ ] Add charts/graphs (Chart.js integration) for trend visualization
- [ ] Add GIS map showing facility location and sensor distribution
- [ ] Add date range filtering and data export (CSV/PDF)
- [ ] Add user authentication and role-based access control
- [ ] Deploy to cloud (AWS, GCP, or Heroku)

### Medium-term
- [ ] Integrate real IoT sensors (energy meters, water sensors, waste scales)
- [ ] Add SMS/email alerts for threshold violations
- [ ] Build annual sustainability report generation (auto-PDF)
- [ ] Add multi-facility dashboard (SAAS model)
- [ ] Integrate with Power BI or Superset for advanced analytics

### Long-term
- [ ] Mobile app (React Native) for staff data entry in the field
- [ ] Blockchain integration for carbon credit verification
- [ ] AI-powered anomaly detection and recommendations
- [ ] Regional expansion across East Africa

---

## Support & Contact

For issues, feature requests, or deployment help:
- **Email:** info@geo-apnet.co.ke
- **Project Proposal:** See `PROPOSAL.md` for funding and partnership details

---

## License

[Insert your organization's license here]

---

**Last Updated:** 10 February 2026  
**Status:** Development / MVP Phase
