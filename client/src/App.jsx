import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import { logo } from './assets';
import { Home, CreatePost } from './pages';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => (
    <BrowserRouter>
        {/* HEADER */}
        <header className="w-full sticky top-0 z-50 flex justify-between items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 sm:px-10 px-4 py-4 shadow-lg">
            <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            >
                <Link to="/">
                    <img
                    src={logo}
                    alt="logo"
                    className="w-28 object-contain drop-shadow-xl hover:scale-110 transition-transform duration-300"
                    />
                </Link>
            </motion.div>

            <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            >
                <Link
                to="/create-post"
                className="font-semibold tracking-wide bg-white/20 text-white px-5 py-2 rounded-xl shadow-md backdrop-blur-md hover:bg-white/30 hover:shadow-lg transition-all duration-300"
                >
                    + Create
                </Link>
            </motion.div>
        </header>

        {/* BACKGROUND */}
        <div className="relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50 animate-gradient-x" />

            {/* Floating circles */}
            <div className="absolute top-20 left-10 w-60 h-60 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
            <div className="absolute top-40 right-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
            <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

            {/* MAIN CONTENT */}
            <main className="sm:p-10 px-4 py-8 w-full min-h-[calc(100vh-73px)] relative z-10">
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                >
                    <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    pauseOnHover
                    draggable
                    />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/create-post" element={<CreatePost />} />
                    </Routes>
                </motion.div>
            </main>
        </div>
    </BrowserRouter>
);

export default App;