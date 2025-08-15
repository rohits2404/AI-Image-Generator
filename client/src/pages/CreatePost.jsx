import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";
import { toast } from "react-toastify";

const CreatePost = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState({ name: "", prompt: "", photo: "" });

    const [generatingImg, setGeneratingImg] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSurpriseMe = () => {
        const randomPrompt = getRandomPrompt(form.prompt);
        setForm({ ...form, prompt: randomPrompt });
    };

    const generateImage = async () => {
        if (form.prompt) {
            try {
                setGeneratingImg(true);
                const response = await fetch("http://localhost:8080/api/v1/dalle", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ prompt: form.prompt }),
                });

                const data = await response.json();
                setForm({ ...form, photo: data.photo });
            } catch (err) {
                toast.error(`Error: ${err.message}`);
            } finally {
                setGeneratingImg(false);
            }
        } else {
            toast.warning("Please provide a proper prompt");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.prompt || !form.photo) {
            toast.warning("Please generate an image with proper details");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("http://localhost:8080/api/v1/post", {
            method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Something went wrong");
            }

            await response.json();
            toast.success("Post created successfully!");
            navigate("/");
        } catch (err) {
            toast.error(`Error: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-8">
            <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            >
                <h1 className="font-extrabold text-transparent text-4xl sm:text-5xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    Create
                </h1>
                <p className="mt-3 text-gray-600 text-[15px] sm:text-[16px] max-w-[600px] leading-relaxed">
                Generate an imaginative image through DALL·E AI and share it with the community
                </p>
            </motion.div>

            <motion.form
            className="mt-16 max-w-3xl bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-gray-100"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            >
                <div className="flex flex-col gap-6">
                    <FormField
                    labelName="Your Name"
                    type="text"
                    name="name"
                    placeholder="Ex., john doe"
                    value={form.name}
                    handleChange={handleChange}
                    />

                    <FormField
                    labelName="Prompt"
                    type="text"
                    name="prompt"
                    placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
                    value={form.prompt}
                    handleChange={handleChange}
                    isSurpriseMe
                    handleSurpriseMe={handleSurpriseMe}
                    />

                    <motion.div
                    className="relative bg-gray-50 border border-gray-200 rounded-xl w-72 h-72 flex justify-center items-center shadow-inner hover:shadow-lg transition-all"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    >
                        {form.photo ? (
                            <img src={form.photo} alt={form.prompt} className="w-full h-full object-contain rounded-lg" />
                        ) : (
                            <img src={preview} alt="preview" className="w-9/12 h-9/12 object-contain opacity-40" />
                        )}

                        {generatingImg && (
                            <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-xl">
                                <Loader />
                            </div>
                        )}
                    </motion.div>
                </div>

                <div className="mt-6 flex gap-5">
                    <motion.button
                    type="button"
                    onClick={generateImage}
                    className="text-white bg-gradient-to-r from-green-500 to-emerald-600 font-medium rounded-xl text-sm w-full sm:w-auto px-6 py-3 shadow-md hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    >
                        {generatingImg ? "Generating..." : "Generate"}
                    </motion.button>
                </div>

                <div className="mt-10">
                    <p className="mt-2 text-gray-500 text-[14px] italic">
                        ** Once you have created the image you want, you can share it with others in the community **
                    </p>

                    <motion.button
                    type="submit"
                    className="mt-4 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-medium rounded-xl text-sm w-full sm:w-auto px-6 py-3 shadow-md hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    >
                        {loading ? "Sharing..." : "Share with the Community"}
                    </motion.button>
                </div>
            </motion.form>
        </section>
    );
};

export default CreatePost;