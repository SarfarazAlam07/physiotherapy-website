# 🏥 Mirani Physiotherapy & Rehab Website

![MERN Stack](https://img.shields.io/badge/MERN-Stack-blue) ![Tailwind CSS](https://img.shields.io/badge/Style-Tailwind_CSS-38bdf8) ![Status](https://img.shields.io/badge/Status-Production_Ready-green)

A full-stack, responsive web application developed for a Physiotherapy Clinic. This platform allows patients to explore services, view doctor profiles, read patient reviews, and book appointments seamlessly.

The application is built using the **MERN Stack** (MongoDB, Express, React, Node.js) and features a modern, high-performance architecture with **Optimistic UI**, **Lazy Loading**, and **SEO Optimization**.

---

## 🚀 Live Demo

- **Frontend:** [Link to your Vercel App](https://your-app.vercel.app)
- **Backend API:** [Link to your Render API](https://your-api.onrender.com)

---

## ✨ Key Features

### 🖥️ Frontend (Client)

- **Instant Load (Optimistic UI):** The interface loads instantly using default data while fetching updates in the background, ensuring zero layout shift.
- **Dynamic Routing & Lazy Loading:** Pages are code-split using `React.lazy` and `Suspense` for faster initial load times.
- **Appointment Booking System:** Users can book appointments via a modal form without page reloads.
- **SEO Optimized:** Fully configured with `react-helmet-async` for dynamic Meta Titles and Descriptions.
- **Responsive Design:** Built with **Tailwind CSS**, ensuring a perfect look on Mobile, Tablet, and Desktop.
- **Interactive UI:** Smooth transitions, scroll-lock modals, and interactive sliders.

### ⚙️ Backend (Server)

- **MVC Architecture:** Clean separation of concerns (Models, Views/Routes, Controllers).
- **Email Notification:** Integrated **Nodemailer** to send instant appointment details to the doctor and patient.
- **Security:** Implemented `Helmet` for security headers and `CORS` policies.
- **RESTful API:** organized endpoints for Doctors, Services, and Appointments.
- **Error Handling:** Centralized error handling for a robust server experience.

---

## 🛠️ Tech Stack

| Component         | Technology                                                       |
| ----------------- | ---------------------------------------------------------------- |
| **Frontend**      | React.js (v19), Tailwind CSS, Axios, Lucide React, Framer Motion |
| **Backend**       | Node.js, Express.js                                              |
| **Database**      | MongoDB (Mongoose)                                               |
| **Email Service** | Nodemailer (SMTP)                                                |
| **State Mgmt**    | React Hooks (useState, useEffect, useContext)                    |
| **Tools**         | Git, Vercel, Render                                              |

---

## 📂 Project Structure

```bash
physiotherapy-website/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── api/            # Centralized Axios Config
│   │   ├── components/     # Reusable Components
│   │   │   └── Sections/   # Page Sections (Hero, Header, Footer)
│   │   ├── data/           # Static Data & Defaults
│   │   ├── Pages/          # Route Pages (Lazy Loaded)
│   │   └── ...
│   └── ...
├── server/                 # Node.js Backend
│   ├── src/
│   │   ├── config/         # DB Connection
│   │   ├── controllers/    # Business Logic
│   │   ├── models/         # Mongoose Schemas
│   │   ├── routes/         # API Routes
│   │   └── ...
│   └── ...
└── README.md



⚡ Getting Started (Local Setup)Follow these steps to run the project locally on your machine.PrerequisitesNode.js installedMongoDB URI (Atlas or Local)1. Clone the RepositoryBashgit clone [https://github.com/your-username/physiotherapy-website.git](https://github.com/your-username/physiotherapy-website.git)
cd physiotherapy-website
2. Backend SetupBashcd server
npm install
Create a .env file in the server folder:Code snippetPORT=4040
MONGO_URI=your_mongodb_connection_string
ETH_USER=your_email@gmail.com
ETH_PASS=your_app_password
DOCTOR_EMAIL=doctor_email@gmail.com
Start the Server:Bashnpm start
3. Frontend SetupOpen a new terminal:Bashcd client
npm install --legacy-peer-deps
Create a .env file in the client folder:Code snippetREACT_APP_API_URL=http://localhost:4040/
Start the Client:Bashnpm start
🔌 API EndpointsMethodEndpointDescriptionGET/api/doctorsGet doctor profile detailsGET/api/servicesGet list of all treatmentsPOST/api/appointmentBook a new appointment (Sends Email)GET/api/statsGet clinic statistics
```
