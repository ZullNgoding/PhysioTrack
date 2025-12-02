# PhysioTrack

**PhysioTrack** is a modern, full-stack physiotherapy practice management platform designed to streamline patient tracking, appointment scheduling, and recovery monitoring. It features a unified dashboard for therapists and patients, real-time progress tracking, and secure communication.

## 🚀 Tech Stack

This project uses a **Unified Monorepo** architecture combining Next.js and Express.

### **Frontend**

  * **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
  * **Language:** TypeScript
  * **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
  * **Authentication:** [NextAuth.js v5 (Beta)](https://authjs.dev/)
  * **Icons:** Material Symbols (Google Fonts)

### **Backend**

  * **Runtime:** Node.js
  * **Framework:** [Express.js](https://expressjs.com/)
  * **Database:** [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
  * **Language:** TypeScript (executed via `ts-node`)

-----

## 📂 Project Structure

The project follows a separated frontend/backend structure within a single root directory:

```text
physiotrack/
├── src/                 # Next.js Frontend
│   ├── app/             # App Router Pages (Dashboard, Login, Patients)
│   ├── components/      # Reusable UI & Layouts
│   ├── lib/             # Utilities (API fetcher)
│   └── types/           # Shared TypeScript Interfaces
│
├── backend/             # Express Backend
│   ├── config/          # Database connection
│   ├── controllers/     # Route logic
│   ├── models/          # Mongoose Schemas (User, Patient, Appointment)
│   ├── routes/          # API Endpoints
│   └── server.ts        # Server Entry Point
│
├── .env                 # Backend secrets (Mongo URI)
├── .env.local           # Frontend secrets (NextAuth)
└── package.json         # Unified dependencies & scripts
```

-----

## 🛠️ Getting Started

### 1\. Prerequisites

  * Node.js (v18 or higher)
  * MongoDB (Running locally or Atlas URI)

### 2\. Installation

Clone the repository and install dependencies from the root folder:

```bash
git clone https://github.com/yourusername/physiotrack.git
cd physiotrack
npm install
```

### 3\. Environment Configuration

You need to create two environment files.

**Create `.env`** (Root level - For Backend & Global):

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/physiotrack
# Or your MongoDB Atlas connection string
```

**Create `.env.local`** (Root level - For Next.js Frontend):

```env
# Backend API URL
NEXT_PUBLIC_API_URL=http://localhost:5000/api

# NextAuth.js Config
AUTH_SECRET="your_super_secret_random_string" # Generate with: openssl rand -base64 32
AUTH_URL=http://localhost:3000

# Google OAuth (Optional - Get from Google Cloud Console)
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
```

### 4\. Running the App

To start both the **Next.js Frontend (port 3000)** and **Express Backend (port 5000)** simultaneously:

```bash
npm run fullstack
```

  * **Frontend:** [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000)
  * **Backend API:** [http://localhost:5000](https://www.google.com/search?q=http://localhost:5000)

#### Other Scripts

  * `npm run dev`: Starts only the Next.js frontend.
  * `npm run server`: Starts only the Express backend.
  * `npm run build`: Builds the Next.js application for production.

-----

## ✨ Key Features

  * **🔐 Authentication:** Secure Email/Password login (with verification flow) and Google OAuth support.
  * **👥 Role Selection:** Distinct workflows for **Patients** and **Doctors**.
  * **📊 Dashboard:** Real-time overview of active patients, upcoming appointments, and clinic stats.
  * **📅 Calendar:** Interactive weekly calendar to manage appointment schedules.
  * **🏋️ Exercise Tool:** Drag-and-drop interface for therapists to build recovery plans for patients.
  * **📈 Analytics:** Visual charts for patient recovery progress (Pain levels, ROM) and clinic effectiveness.
  * **💬 Communication:** Integrated chat interface for doctor-patient communication.

-----

## 🔌 API Endpoints

The backend exposes the following REST endpoints (prefix `/api`):

  * **Auth:**
      * `POST /auth/login`
      * `POST /auth/register`
      * `POST /auth/verify-email`
  * **Patients:**
      * `GET /patients` - List all patients
      * `POST /patients` - Create new patient
  * **Appointments:**
      * `GET /appointments` - List all appointments
      * `POST /appointments` - Schedule new appointment

-----

## 🤝 Contributing

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.