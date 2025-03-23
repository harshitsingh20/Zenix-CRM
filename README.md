
# Zenix - MERN Stack CRM Application

A professional CRM web application built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- User authentication (register, login, logout)
- User profile management
- Responsive design with Tailwind CSS
- Modern UI with professional styling

## Project Structure

- `/src`: React frontend
- `/server`: Express backend

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
```
git clone <repository-url>
cd Zenix
```

2. Install frontend dependencies
```
npm install
```

3. Install backend dependencies
```
cd server
npm install
```

4. Set up environment variables
- Create a `.env` file in the server directory with the following variables:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/zenix-crm
JWT_SECRET=your_jwt_secret
```
- Replace `your_jwt_secret` with a secure string for JWT token generation

### Running the Application

1. Start the backend server
```
cd server
npm run dev
```

2. In another terminal, start the frontend
```
npm run dev
```
3. In another terminal, start the MongoDB locally
```
sudo systemctl start mongod

sudo systemctl status mongod
```

3. Access the application at http://localhost:5173

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user
- `GET /api/auth/me` - Get current user's profile

### Users
- `PUT /api/users/profile` - Update user profile

## Technologies Used

### Frontend
- React
- React Router
- Tailwind CSS
- Lucide React (icons)
- Fetch API

### Backend
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password hashing
- Express-validator for input validation
