# 🎯 Interview IQ — Remote Interview Platform

<div align="center">

**A production-grade real-time remote interview platform**

[![Live Demo](https://img.shields.io/badge/Live-Demo-green)](https://interview-iq-fxa1.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repo-black)](https://github.com/Deepal22/InterviewIQ)

</div>

## 🚀 Features

- 🔐 **Authentication** via Clerk JWT
- 🎥 **1-on-1 Video Interview Rooms** with WebRTC via Stream SDK
- 💻 **VSCode-Powered Code Editor** with syntax highlighting
- ⚙️ **Secure Code Execution** in isolated sandboxed environment
- 🎯 **Auto Feedback** — pass/fail based on test cases
- 🎉 **Confetti on Success** + notifications on fail
- 💬 **Real-time Chat** during interview sessions
- 🔊 **Mic, Camera Toggle** + Screen Sharing & Recording
- 🔒 **Room Locking** — max 2 participants enforced
- 🧩 **Solo Practice Mode** — practice problems independently
- 🧭 **Dashboard** with live session stats
- 🧠 **Background Jobs** via Inngest for async processing
- ⚡ **Optimistic UI** with TanStack Query caching

## 🛠️ Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React, TailwindCSS, TanStack Query |
| Backend | Node.js, Express.js, REST API |
| Database | MongoDB, Mongoose |
| Auth | Clerk |
| Video/Chat | Stream SDK (WebRTC) |
| Async Jobs | Inngest |
| Deployment | Vercel + CI/CD via GitHub |
| Code Review | CodeRabbit |

## 🏗️ Architecture

```
Frontend (React + Vercel)
        ↓
Backend (Node.js + Express)
        ↓
    ┌───┴───┐
MongoDB  Stream SDK
         ↓
    Video + Chat
         ↓
      Inngest
    (Background Jobs)
```

## 🚦 Getting Started

```bash
# Clone the repo
git clone https://github.com/Deepal22/InterviewIQ.git

# Install dependencies
cd InterviewIQ
npm install --prefix backend
npm install --prefix frontend

# Set up environment variables
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

# Run locally
npm run dev --prefix backend
npm run dev --prefix frontend
```

## 🔑 Environment Variables

**Backend `.env`**
```
PORT=3000
DB_URL=your_mongodb_url
CLERK_SECRET_KEY=your_clerk_secret
STREAM_API_KEY=your_stream_key
STREAM_API_SECRET=your_stream_secret
INNGEST_EVENT_KEY=your_inngest_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
CLIENT_URL=http://localhost:5173
```

**Frontend `.env`**
```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:3000/api
VITE_STREAM_API_KEY=your_stream_key
```
