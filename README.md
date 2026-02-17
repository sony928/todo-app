# Todo App

A full-stack Todo Application built using **Spring Boot** (Backend) and **React** (Frontend).

This application allows users to create, update, complete, and delete tasks with a clean and responsive UI.

---

## 🚀 Tech Stack

### Backend
- Spring Boot
- Spring Data JPA
- H2 In-Memory Database
- REST APIs

### Frontend
- React
- Axios
- CSS (Custom Styling)

---

## ✨ Features

- Add new todo
- View all todos
- Mark todo as complete / undo
- Delete todo
- Persistent storage (H2 database while server runs)
- Clean and modern UI
todo app
├── todo # Spring Boot Backend
└── todo-frontend # React Frontend
---

## 🏗️ Project Structure

---

## ⚙️ How to Run Locally

### 1️⃣ Run Backend

```bash
cd todo
./mvnw spring-boot:run
http://localhost:8080
2️⃣ Run Frontend

Open a new terminal:

cd todo-frontend
npm install
npm start


Frontend runs on:

http://localhost:3000
🔌 API Endpoints
Method	Endpoint	Description
GET	/api/todos	Get all todos
POST	/api/todos	Create new todo
PUT	/api/todos/{id}	Update todo
DELETE	/api/todos/{id}	Delete todo
🧠 What This Project Demonstrates

REST API development with Spring Boot

JPA entity mapping and database integration

Service layer architecture

Frontend-backend integration using Axios

State management in React

CRUD operations end-to-end

📌 Future Improvements

Edit todo inline

Filter (All / Completed / Active)

Authentication

Deployment (Render + Vercel)

👤 Author

GitHub: https://github.com/sony928


---

# 🔥 Why This README Is Strong

- Clear structure
- Shows tech stack
- Shows architecture
- Shows API endpoints
- Shows learning value
- Not exaggerated
- Not childish

---

Now do this:

1. Add README.md
2. Commit
3. Push



git add README.md
git commit -m "Added README"
git push
