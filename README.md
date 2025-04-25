

```markdown
# 📝 Full Stack To-Do List App

A beautifully animated, dark-mode enabled full stack To-Do List application built with:

- 🔥 Frontend: React + Tailwind CSS + Framer Motion + Toast Notifications
- ⚙️ Backend: Express.js + MongoDB + Mongoose
- 🌐 API: RESTful architecture

---

## ✨ Features

- ✅ Add, complete, and delete tasks
- 💡 Light/Dark mode toggle
- 🎬 Smooth animations (Framer Motion)
- 🔔 Toast notifications (Add/Delete)
- 📱 Fully responsive UI
- 🚀 MongoDB-based persistent storage

---

## 📁 Folder Structure
```

todo-app/
├── client/ # React Frontend
│ ├── public/
│ ├── src/
│ │ ├── components/ # TodoItem.jsx, TodoForm.jsx
│ │ ├── App.jsx
│ │ └── index.css
│ ├── tailwind.config.js
│ └── vite.config.js
├── server/ # Express Backend
│ ├── models/ # Todo.js
│ ├── routes/ # todos.js
│ └── index.js
├── .env
└── README.md

````

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/fullstack-todo-app.git
cd fullstack-todo-app
````

### 2. Set Up Backend

```bash
cd server
npm install
```

Create a `.env` file in `server/` with:

```
MONGO_URI=mongodb://localhost:27017/todo_db
```

Then start the backend:

```bash
npm run dev
```

### 3. Set Up Frontend

```bash
cd ../client
npm install
npm run dev
```

---

## 🚀 Run the App

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend API: [http://localhost:5000/todos](http://localhost:5000/todos)

---

## 💻 Tech Stack

| Technology     | Purpose               |
| -------------- | --------------------- |
| React          | Frontend Framework    |
| Tailwind CSS   | Utility-first styling |
| Framer Motion  | Animations            |
| React Toastify | Notifications         |
| Express.js     | Backend Framework     |
| MongoDB        | NoSQL Database        |
| Mongoose       | MongoDB ODM           |

---

## 📸 Preview

> Coming soon: Include screenshots or a Loom demo here!

---

## 📬 Feedback / Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

## 🧙‍♂️ Author

Made with ❤️ by Shivam Pali
