import "dotenv/config";
import express from "express";
import fetch from "node-fetch";

const router = express.Router();

const RAPID_API_KEY = process.env.RAPID_API_KEY;

router.get("/", (req, res) => {
    res.status(200).json({ message: "Hello from RapidAPI image generator!" });
});

router.post("/", async (req, res) => {
    try {
        const { prompt } = req.body;

        const url = "https://ai-text-to-image-generator-flux-free-api.p.rapidapi.com/aaaaaaaaaaaaaaaaaiimagegenerator/quick.php";

        const options = {
            method: "POST",
            headers: {
                "x-rapidapi-key": RAPID_API_KEY,
                "x-rapidapi-host": "ai-text-to-image-generator-flux-free-api.p.rapidapi.com",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                prompt,
                style_id: 4,
                size: "1-1",
            }),
        };

        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`RapidAPI error: ${response.status}`);
        }

        const result = await response.json();

        let photo;

        if (result.final_result && result.final_result.length > 0) {
            // Grab the first generated image
            photo = result.final_result[0].origin;
        } else if (result.photo) {
            // Stability style
            photo = `data:image/jpeg;base64,${result.photo}`;
        } else {
            console.error("Unexpected response:", result);
            throw new Error("Unexpected API response format");
        }

        res.status(200).json({ photo });
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message || "RapidAPI request failed");
    }
});

export default router;
