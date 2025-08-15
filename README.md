
ImaginAIry: A DALL·E AI Image Generator
Welcome to ImaginAIry, a full-stack MERN (MongoDB, Express, React, Node.js) application that leverages AI to generate and share imaginative images with a vibrant community.

✨ About the Project
ImaginAIry is a web application where users can generate unique and imaginative images using a DALL·E AI model via a third-party RapidAPI. The generated images can then be shared with the community in a visually stunning showcase. The application features a clean, responsive interface built with React and Tailwind CSS, enriched with fluid animations from framer-motion.

🚀 Features
AI-Powered Image Generation: Generate imaginative images from text prompts using the integrated DALL·E AI.

Surprise Me: Get inspired with a "Surprise Me" button that generates a random prompt to spark your creativity.

Community Showcase: Browse a gallery of images created by other users in the community.

Search Functionality: Easily find specific images by searching through user names and prompts.

Seamless Sharing: Share your newly created images with the community with a single click.

Image Download: Download any image from the showcase directly to your device.

Stylish UI: Enjoy a modern, elegant, and responsive user interface with beautiful animations.

💻 Technologies
This project is a full-stack application utilizing the following technologies:

Client-side (Frontend)
React: A JavaScript library for building user interfaces.

React Router DOM: For handling client-side routing between pages.

Vite: A fast build tool for the frontend.

Tailwind CSS: A utility-first CSS framework for rapid styling.

framer-motion: A library to add animations and transitions to the UI.

react-toastify: For displaying stylish and non-intrusive notifications.

FileSaver.js: To enable image downloading functionality.

Server-side (Backend)
Node.js & Express.js: The runtime environment and framework for building the REST API.

MongoDB & Mongoose: A NoSQL database and an ODM (Object Data Modeling) library for managing data, including posts with name, prompt, and photo fields.

RapidAPI: The third-party service used to connect to the AI text-to-image generator.

Cloudinary: A cloud service for image and video management, used to store the generated images.

dotenv: To manage environment variables securely.

CORS: Middleware to enable Cross-Origin Resource Sharing.

🛠️ Getting Started
To run this project locally, you will need to set up both the client and server.

Prerequisites
Node.js (>= 18)

MongoDB Atlas account (or a local MongoDB instance)

RapidAPI account for the AI image generator

Cloudinary account for image storage

Installation
1. Clone the repository

Bash

git clone <your-repo-link>
cd <your-repo-name>
2. Setup the Server
Navigate to the server directory and install the dependencies:

Bash

cd server
npm install
Create a .env file in the server directory and add your credentials:

Code snippet

MONGODB_URL=<Your-MongoDB-Connection-URL>
RAPID_API_KEY=<Your-RapidAPI-Key>
CLOUDINARY_CLOUD_NAME=<Your-Cloudinary-Cloud-Name>
CLOUDINARY_API_KEY=<Your-Cloudinary-API-Key>
CLOUDINARY_API_SECRET=<Your-Cloudinary-API-Secret>
FRONTEND_URL="http://localhost:5173"
Start the server:

Bash

npm run dev
3. Setup the Client
Open a new terminal, navigate to the client directory, and install dependencies:

Bash

cd ../client
npm install
Create a .env file in the client directory and add the base API URL:

Code snippet

VITE_BASE_API_URL="http://localhost:8080"
Start the client:

Bash

npm run dev
The application should now be running on http://localhost:5173.
