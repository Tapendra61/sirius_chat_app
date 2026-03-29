# Sirius Chat App

A real-time chat application built with React.js and Express.js, featuring instant messaging, online user presence, image sharing, and theme customization.

**Live Demo:** [sirius-chat-app.vercel.app](https://sirius-chat-app.vercel.app)

## Screenshots

### Login
![login](assets/login.png)

### Chat
![chat](assets/chat.png)

## Tech Stack

**Frontend:** React 19, Vite, Tailwind CSS, DaisyUI, Zustand, Socket.IO Client

**Backend:** Express.js, MongoDB (Mongoose), Socket.IO, JWT, Cloudinary

## Features

- Real-time messaging with Socket.IO
- User authentication (signup, login, logout)
- Online/offline user status
- Image sharing via Cloudinary
- Profile picture upload
- 31 theme options powered by DaisyUI

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download) installed
- [MongoDB Atlas](https://account.mongodb.com/account/login) account and cluster
- [Cloudinary](https://cloudinary.com/users/login) account

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/sirius-chat-app.git
   cd sirius-chat-app
   ```

2. Create the environment file:
   - Copy `.env.sample` to `backend/.env`
   - Fill in your MongoDB Atlas URI, JWT secret, and Cloudinary credentials

3. Install dependencies:
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```

4. Start the development servers:
   ```bash
   # Terminal 1 - Backend
   cd backend && npm run dev

   # Terminal 2 - Frontend
   cd frontend && npm run dev
   ```

5. Open your browser at the URL shown in the frontend terminal (default: `http://localhost:5173`)

### Environment Variables

```
MONGODB_URI=         # MongoDB Atlas connection string
PORT=5001            # Backend server port
JWT_SECRET=          # Secret key for JWT signing
NODE_ENV=development # Set to "production" in deployment
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

## Deployment

- **Frontend** is deployed on [Vercel](https://vercel.com)
- **Backend** is deployed on [Render](https://render.com)

Set `VITE_BACKEND_URL` in Vercel and `CLIENT_URL` in Render to connect the two services.
