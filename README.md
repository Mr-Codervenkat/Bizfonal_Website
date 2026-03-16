# Bizfonal Infotech

This project contains a React frontend and a Node.js backend for the Bizfonal Infotech website.

## Structure
- client: React (Vite) frontend
- server: Node.js (Express) backend for contact form email delivery

## Setup

### 1) Frontend
```
cd client
npm install
npm run dev
```
The site will run on http://localhost:5173

### 2) Backend
```
cd server
npm install
```
Create a `.env` file using `server/.env.example` as a template:
```
PORT=5000
CORS_ORIGIN=http://localhost:5173
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FROM_EMAIL=your-email@gmail.com
RECIPIENT_EMAIL=bizfonal.infotech@gmail.com
```
Then start the server:
```
npm run dev
```

#### Gmail Setup (App Password)
Gmail requires an App Password for SMTP (normal Gmail password will not work).
1. Turn on 2-Step Verification for the Gmail account you will send from.
2. Create an App Password (type: Mail).
3. Use that App Password for `SMTP_PASS`.

If you want all contact messages to arrive at `bizfonal.infotech@gmail.com`, set:
```
SMTP_USER=bizfonal.infotech@gmail.com
FROM_EMAIL=bizfonal.infotech@gmail.com
RECIPIENT_EMAIL=bizfonal.infotech@gmail.com
```

## Logo
Replace `client/src/assets/bizfonal-logo.png` with your official Bizfonal logo if you want an exact match.

## Contact Form
The React contact form posts to `/api/contact` on the backend and sends emails to `bizfonal.infotech@gmail.com`.
