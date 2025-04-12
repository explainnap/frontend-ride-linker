
![Screenshot 2025-04-12 at 13 21 59](https://github.com/user-attachments/assets/a13e3ad1-ae31-4f01-ae09-5b2fb0e601d4)



# RideLinker Frontend 🚴‍♂️

This is the React.js frontend for the RideLinker application.  
It allows users to sign up, sign in, create cycling groups, and manage rides!

## 🚀 Tech Stack

- React.js
- React Router DOM
- Context API for global state management
- Fetch API for API calls
- Vite.js for fast development

## ⚙️ Getting Started

### 1. Clone the repository


git clone https://github.com/explainnap/frontend-ride-linker
cd frontend-ride-linker
-



### 2. Clone the repository

npm install
-

### 3. Environment variables

Create a .env file in the root of frontend-ride-linker and add:
VITE_BACK_END_SERVER_URL=http://localhost:3000

### 4. Environment variables

Start the app:
npm run dev

The app will run at:
http://localhost:5173

-------

### 🧩 App Features
✅ User Authentication

Sign up new users

Sign in existing users

JWT token stored in localStorage

Global user state with Context API

✅ Groups

View all groups

Create a new group (authenticated)

Groups display as a responsive grid layout

✅ Rides

View all rides within a group

Add new rides to a group (authenticated)

Mark rides as complete 

✅ or undo completion

Status updates dynamically

✅ UI/UX

Clean, simple design

Responsive for desktop and mobile

Buttons, forms, and layout aligned centrally

### 🗂️ Folder Structure

src/
  ├── assets/               # Images and assets
  ├── components/           # React components (NavBar, Groups, Rides, etc.)
  │    ├── AddGroup/
  │    ├── AddRide/
  │    ├── Dashboard/
  │    ├── Groups/
  │    ├── Rides/
  │    └── SignInForm/SignUpForm
  ├── contexts/             # Context API setup (UserContext)
  ├── services/             # Service files (authService.js, groupsService.js)
  ├── App.jsx               # Main app routes and layout
  ├── main.jsx              # App entry point
  ├── index.css             # Global CSS
  └── .env                  # Environment variables


### 🧑‍💻 Usage Notes
The app requires the backend to be running at localhost:3000.

Tokens are stored in localStorage after sign-in and used for protected routes.

The NavBar updates dynamically based on user login state.

If you refresh the page, you stay logged in (JWT stored)!



### ✅ Future Improvements (stretch goals)

🚀 Toast notifications for actions (success, error)

🚀 Better form validations and error messages

🚀 Add user profile page

🚀 Pagination for groups and rides

🚀 Add maps to rides

🚀 Unit tests for components

### 📃 License
This project is for learning and demo purposes.

