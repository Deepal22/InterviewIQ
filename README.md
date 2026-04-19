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

<img width="1902" height="910" alt="Screenshot 2026-04-18 160138" src="https://github.com/user-attachments/assets/c05d93bf-3373-449a-bdf6-ad689c965baf" />

<img width="1919" height="913" alt="Screenshot 2026-04-18 160344" src="https://github.com/user-attachments/assets/66a9a814-b3c0-401a-88a7-01ae89d49f9d" />

<img width="1919" height="910" alt="Screenshot 2026-04-18 160357" src="https://github.com/user-attachments/assets/c37e937e-7954-4a2a-9ec6-4fe8424bdf42" />

<img width="1917" height="904" alt="Screenshot 2026-04-18 160829" src="https://github.com/user-attachments/assets/321cbfb4-14be-4d0e-892e-1a4b4c312d2e" />

<img width="1919" height="909" alt="Screenshot 2026-04-18 160846" src="https://github.com/user-attachments/assets/f6dbb71a-5cd8-4960-9f4c-096e1f5b4bc1" />

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
