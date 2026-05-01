# 👥 KeenKeeper — Keep Your Friendships Alive

KeenKeeper is a React-based friendship management web application that helps users track important relationships, view friend details, log interactions, and analyze communication patterns.

## 🌐 Live Demo

Live Link: https://sparkling-conkies-eabe14.netlify.app/

## 📂 GitHub Repository

Repository Link: https://github.com/Noyon710/B13-A7-keen-keeper

## ✨ Key Features

- View friends in a clean responsive 4-column card layout
- Click any friend card to see detailed profile information
- Add Call, Text, or Video check-ins with toast notifications
- View all interactions on the Timeline page
- Filter timeline entries by interaction type
- Analyze interactions using a Pie Chart
- Active navbar highlighting for Home, Timeline, and Stats pages
- Custom 404 page for invalid routes

## 🛠️ Technologies Used

- React.js
- React Router DOM
- CSS3
- Recharts
- React Hot Toast
- Vite

## 📱 Responsive Design

The application is fully responsive and works on:

- Mobile
- Tablet
- Desktop

## 📁 Project Structure

```bash
keen-keeper/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── context/
│   │   └── TimelineContext.jsx
│   ├── data/
│   │   └── friends.json
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── FriendDetails.jsx
│   │   ├── Timeline.jsx
│   │   ├── Stats.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md
