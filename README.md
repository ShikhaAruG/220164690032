#  URL Shortener

A full-stack **URL Shortener** app built with **React (frontend)**, **Node.js + Express (backend)**, and **MongoDB (database)**.
Includes **authentication, dashboard, URL stats, and request logging middleware**.

---

## 🚀 Features

* ✅ **User Authentication** (JWT-based login/register)
* ✅ **Shorten Long URLs** with unique shortcodes
* ✅ **Copy, Delete & Track Clicks** for each shortened URL
* ✅ **Dashboard with Stats**
* ✅ **Reusable React Components** (Form, List, Item, Stats)
* ✅ **Custom Express Middleware** for request logging
* ✅ **MongoDB persistence** with Mongoose

---

## 🛠️ Tech Stack

**Frontend:** React, React Router, Context API, TailwindCSS
**Backend:** Node.js, Express.js, Mongoose, JWT
**Database:** MongoDB
**Other:** Axios (API calls), Lucide Icons

---

## ⚙️ Setup Instructions

### 1️ Clone Repository

```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
```

---

### 2️ Backend Setup

```bash
cd backend
npm install
```

Create a **.env** file in `/backend`:

```env
PORT=5000
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
```

Run backend:

```bash
npm run dev
```

Server will run on:  `http://localhost:5000`

---

### 3️ Frontend Setup

```bash
cd ../frontend
npm install
```

Create a **.env** file in `/frontend`:

```env
VITE_API_URL=http://localhost:5000/api
```

Run frontend:

```bash
npm run dev
```

Frontend will run on: `http://localhost:5173`

---

## 📊 API Endpoints (Backend)

| Method | Endpoint               | Description          |
| ------ | ---------------------- | -------------------- |
| POST   | `/api/auth/login`      | User login           |
| POST   | `/api/auth/register`   | User signup          |
| POST   | `/api/url/shorten`     | Shorten new URL      |
| GET    | `/api/url/:code`       | Redirect to original |
| GET    | `/api/url/stats/:code` | Get stats            |

---

##  Logging Middleware

Every API request is logged in the backend:

```js
const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
};
```
---

## 🧑‍💻 Author

Developed by **Shikha Gupta** 

---
