import "dotenv/config";
import express from "express";
import { v2 as cloudinary } from "cloudinary";

import Post from "../models/Post.js";

const router = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// GET all posts
router.route("/").get(async (req, res) => {
    try {
        const posts = await Post.find({});
        res.status(200).json({ success: true, data: posts });
    } catch (err) {
        console.error("Error fetching posts:", err.message);
        res.status(500).json({
            success: false,
            message: "Fetching posts failed, please try again",
        });
    }
});

// CREATE a post
router.route("/").post(async (req, res) => {
    try {
        const { name, prompt, photo } = req.body;

        // Upload image to Cloudinary
        const photoUrl = await cloudinary.uploader.upload(photo);

        const newPost = await Post.create({
            name,
            prompt,
            photo: photoUrl.secure_url,
        });

        res.status(200).json({ success: true, data: newPost });
    } catch (err) {
        console.error("Error creating post:", err.message);
        res.status(500).json({
            success: false,
            message: "Unable to create a post, please try again",
        });
    }
});

export default router;
