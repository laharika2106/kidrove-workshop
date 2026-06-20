# AI & Robotics Summer Workshop Landing Page

## Project Overview

This project is a responsive Workshop Landing Page built using React.js and Tailwind CSS. It includes a Hero section, Workshop Details, Learning Outcomes, FAQ, Registration Form, and an Express.js backend API for handling enquiries.

## Technologies Used

- React.js
- Tailwind CSS
- JavaScript
- Express.js
- Node.js

## Features

- Responsive Landing Page
- Hero Section
- Workshop Details
- Learning Outcomes
- FAQ Section
- Registration Form
- Form Validation
- Express API (`POST /api/enquiry`)

## Backend API

POST `/api/enquiry`

Accepts:

```json
{
  "name": "John",
  "email": "john@example.com",
  "phone": "9876543210"
}
```

Response:

```json
{
  "success": true,
  "message": "Response from Express Backend!"
}
```

## How to Run

### Frontend

```bash
npm install
npm run dev
```

### Backend

```bash
npm install
node server.js
```

Frontend:
http://localhost:5173

Backend:
http://localhost:5000
