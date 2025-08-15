# ImaginAIry: A DALL·E AI Image Generator

Welcome to **ImaginAIry**, a full-stack MERN (MongoDB, Express, React, Node.js) application that leverages AI to generate and share imaginative images with a vibrant community.

---

## ✨ About the Project

ImaginAIry is a web application where users can generate unique and imaginative images using a **DALL·E AI model** via a third-party **RapidAPI**. The generated images can then be shared with the community in a visually stunning showcase. The application features a clean, responsive interface built with **React** and **Tailwind CSS**, enriched with fluid animations from **framer-motion**.

---

## 🚀 Features

- **AI-Powered Image Generation:** Generate imaginative images from text prompts using the integrated DALL·E AI.  
- **Surprise Me:** Get inspired with a "Surprise Me" button that generates a random prompt.  
- **Community Showcase:** Browse a gallery of images created by other users.  
- **Search Functionality:** Easily find specific images by searching through user names and prompts.  
- **Seamless Sharing:** Share your newly created images with the community with a single click.  
- **Image Download:** Download any image from the showcase directly to your device.  
- **Stylish UI:** Enjoy a modern, elegant, and responsive user interface with beautiful animations.  

---

## 💻 Technologies

### Client-side (Frontend)
- **React:** JavaScript library for building user interfaces  
- **React Router DOM:** Client-side routing  
- **Vite:** Fast build tool for frontend  
- **Tailwind CSS:** Utility-first CSS framework  
- **framer-motion:** Animations and transitions  
- **react-toastify:** Stylish, non-intrusive notifications  
- **FileSaver.js:** Image downloading functionality  

### Server-side (Backend)
- **Node.js & Express.js:** REST API server  
- **MongoDB & Mongoose:** NoSQL database & ODM  
- **RapidAPI:** AI text-to-image service  
- **Cloudinary:** Image and video storage  
- **dotenv:** Environment variables management  
- **CORS:** Cross-Origin Resource Sharing  

---

## 🛠️ Getting Started

To run this project locally, set up both the client and server.

### Prerequisites
- Node.js (>= 18)  
- MongoDB Atlas account or local MongoDB  
- RapidAPI account for AI image generator  
- Cloudinary account for image storage  

---

### 1. Clone the Repository

```bash
git clone <repo-url>
cd <repo-name>
2. Setup the Server
bash
Copy
Edit
cd server
npm install
Create a .env file in the server directory and add your credentials:

env
Copy
Edit
MONGODB_URL=
RAPID_API_KEY=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
FRONTEND_URL="http://localhost:5173"
Start the server:

bash
Copy
Edit
npm run dev
3. Setup the Client
Open a new terminal, navigate to the client directory, and install dependencies:

bash
Copy
Edit
cd ../client
npm install
Create a .env file in the client directory:

env
Copy
Edit
VITE_BASE_API_URL="http://localhost:8080"
Start the client:

bash
Copy
Edit
npm run dev
The application should now be running at http://localhost:5173.
