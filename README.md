# Job Tracker App

A simple job tracking app built with **React**, **Vite**, **TypeScript**, and **TailwindCSS**.  
It lets users save jobs, preview them, and remove them.

---

## 🚀 Features
- Add jobs and save them locally (using React Context for state).
- View all saved jobs or preview in a compact widget.
- Delete jobs from saved list.
- Responsive UI with TailwindCSS.

---

## 📦 Tech Stack
- [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for fast development
- [TailwindCSS](https://tailwindcss.com/) for styling
- Context API + Reducer for state management
- Node version: v20.19.4
- vite: 7.1.3 darwin-arm64
- tailwindcss/vite: 4.1.12

---

## 🛠️ Getting Started with npm

### 1. Clone the repository

git clone https://github.com/your-username/job-tracker.git
cd job-tracker

### 2. Clone the repository
npm install

### 3. Run development server
npm run dev

## 🛠️ Getting Started with Docker
### Build
docker build -t job-board .

### Run the container
docker run -p 3000:80 job-board
