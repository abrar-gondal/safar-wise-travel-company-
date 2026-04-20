SafarWise Travel Company

SafarWise is a full-stack travel web application that allows users to explore travel packages, book tours, and interact with a custom-built chatbot for assistance.

---

 Features

 User Features

* Browse travel packages and city tours
* View detailed package information
* Book tours online
* Contact support
* Authentication (Login / Signup)
* Chatbot for instant assistance


 Chatbot Features

* Custom-built chatbot (Python-based)
* Responds to user queries
* Uses trained model with intents
* Can be extended with AI APIs (OpenAI / Hugging Face)

---

 Admin Features

* Manage packages and tours
* Handle bookings
* View user data

---

 Tech Stack

 Frontend

* React (TypeScript)
* Vite
* CSS

 Backend

* Node.js
* Express.js

 Database

* MongoDB (Atlas)

 Chatbot

* Python
* PyTorch (trained model)
* NLP-based intent classification

---

## 📁 Project Structure

```
SafarWise/
│── frontend/        # React frontend
│── backend/         # Node.js backend API
│── chatbot/         # Python chatbot (ML model)
│── .gitignore
│── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```
git clone https://github.com/abrar-gondal/safar-wise-travel-company-.git
cd safar-wise-travel-company-
```

---

### 2. Backend Setup

```
cd backend
npm install
```

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
```

Run backend:

```
npm start
```

---

### 3. Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

### 4. Chatbot Setup (Python)

```
cd chatbot
pip install -r requirements.txt
python chatbot_server.py
```

---

## 🌐 Deployment

* Frontend → Vercel
* Backend → Render
* Database → MongoDB Atlas
* Chatbot → Python service (can be deployed separately)

---

## 🔐 Environment Variables

Make sure to configure:

* MongoDB URI
* JWT Secret
* API Keys (if using AI services)

---

## ⚠️ Notes

* Do not upload `.env` files
* Model files (.pth, .pkl) are excluded from Git
* Free hosting tiers may have limitations (cold starts, API limits)

---

## 📌 Future Improvements

* Integrate advanced AI chatbot (OpenAI / Hugging Face)
* Add payment gateway
* Improve UI/UX
* Add real-time chat system
* Deploy chatbot as microservice

---

## 👨‍💻 Author

 Abrar Aziz

* Full Stack Developer
* Focused on Web + AI Projects
* Working on Flutter
---

## ⭐ Support

If you like this project:

* ⭐ Star the repository
* 🍴 Fork it
* 📢 Share it

---
