# 🎓 Student Portal — Node.js CRUD Web Application

A simple **Student Portal** web application built using **Node.js, HTML, CSS, and JavaScript**. This project demonstrates CRUD (Create, Read, Delete) operations without using Express.js or a database. Student data is stored in a JSON file and served through custom Node.js APIs.

🌐 **Live Demo:** https://student-portal-3t2f.onrender.com

---

## 📸 Project Preview

<img width="1688" height="816" alt="image" src="https://github.com/user-attachments/assets/fbe4790e-0a3e-4ea0-a7f5-9cafa84b2549" />

---

## ✨ Features

* 📚 View all students from the backend.
* ➕ Add a new student using a form.
* ❌ Delete a student instantly.
* ✅ Client-side input validation.
* 🎨 Responsive and clean UI using CSS.
* 🌐 Custom REST APIs built with Node.js `http` module.
* ☁️ Deployed online using Render.

---

## 🛠️ Tech Stack

| Technology       | Purpose                      |
| ---------------- | ---------------------------- |
| HTML5            | Page structure               |
| CSS3             | Styling and responsive UI    |
| JavaScript (ES6) | Frontend logic and Fetch API |
| Node.js          | Backend HTTP server          |
| JSON             | Student data storage         |
| Git & GitHub     | Version control              |
| Render           | Cloud deployment             |

---

## 📂 Project Structure

```text
Student-Portal/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── students.json
├── server.js
├── package.json
├── .gitignore
└── README.md
```

---

## ⚙️ API Endpoints

| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| GET    | `/api/students`     | Fetch all students |
| POST   | `/api/students`     | Add a new student  |
| DELETE | `/api/students/:id` | Delete a student   |

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/manjuprasad123/Student-Portal.git
```

### 2️⃣ Navigate into the Project

```bash
cd Student-Portal
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Run the Server

```bash
node server.js
```

### 5️⃣ Open in Browser

```
http://localhost:5000
```

---

## 🧠 What I Learned

Through this project I learned:

* Creating an HTTP server using Node.js.
* Serving HTML, CSS, and JavaScript files from a backend.
* Building REST APIs with GET, POST, and DELETE requests.
* Using the Fetch API to communicate with the backend.
* Reading and writing JSON files using Node.js `fs` module.
* Deploying a Node.js application on Render.
* Managing a project using Git and GitHub.

---

## 🌍 Live Demo

**Render Deployment:** https://student-portal-3t2f.onrender.com

---

## 👨‍💻 Author

**Manju Prasad**

Computer Science Engineering Student | Aspiring Full Stack Developer

* GitHub: https://github.com/manjuprasad123

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!
