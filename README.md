# Todo_restapi
# Full-Stack Todo App (Django REST + React)

##  Project Overview

This project is a **Full-Stack Todo Application** built using:

* **Backend:** Django & Django REST Framework
* **Frontend:** React
* **Database:** SQLite (default Django DB)

The application allows users to create, view, update, delete, search, filter, and toggle completion status of tasks.

This project demonstrates full-stack development skills including API design, frontend state management, and integration between React and Django.

---

##  Features

###  Backend Features (Django REST)

* CRUD operations for Todo items
* Custom **toggle complete** API
* Filtering by completion status
* Search functionality
* Router-based API endpoints
* Timestamp for task creation

###  Frontend Features (React)

* Fetch and display Todo list
* Toggle task completion via checkbox
* Dynamic UI updates
* Status indicators (Completed / Pending)
* Formatted creation date display
* Axios API integration

---

##  Tech Stack

| Layer      | Technology                    |
| ---------- | ----------------------------- |
| Backend    | Django, Django REST Framework |
| Frontend   | React                         |
| API Client | Axios                         |
| Database   | SQLite                        |
| Filtering  | django-filter                 |

---

##  Project Structure

```
backend/
 ├── todo_project/
 ├── todoapp/
 │    ├── models.py
 │    ├── serializers.py
 │    ├── views.py
 │    ├── urls.py
 │
frontend/
 ├── src/
 │    ├── components/
 │    │     └── Home.jsx
 │    ├── service/
 │    │     └── apicall.js
```

---

##  Installation & Setup

###  Backend Setup

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Backend runs at:

```
http://localhost:8000
```

---

### 🔹 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173 (Vite) or http://localhost:3000
```

---

##  API Endpoints

| Method    | Endpoint            | Description       |
| --------- | ------------------- | ----------------- |
| GET       | /todos/             | List all todos    |
| POST      | /todos/             | Create todo       |
| GET       | /todos/{id}/        | Retrieve todo     |
| PUT/PATCH | /todos/{id}/        | Update todo       |
| DELETE    | /todos/{id}/        | Delete todo       |
| POST      | /todos/{id}/toggle/ | Toggle completion |

---

##  Future Improvements

* User authentication (JWT)
* Priority & due date
* Pagination
* Dark mode
* Drag & drop ordering
* Dashboard analytics

---

## 👨 Author

**Asheeq**

Full-Stack Developer (Django + React)

---

##  Note

This project is built for learning and portfolio purposes to demonstrate practical full-stack development skills.
