import "dotenv/config";
import express from "express";
import cors from "cors";

import connectDB from "./db/connect.js";
import postRoute from "./routes/postRoutes.js";
import dalleRoute from "./routes/dalleRoutes.js";

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173"
}));

app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoute);
app.use('/api/v1/dalle', dalleRoute);

app.get('/', async (req, res) => {
    res.status(200).json({
        message: 'Hello from DALL.E!',
    });
});

const startServer = async () => {
    try {
        connectDB();
        app.listen(8080, () => console.log('Server started on port 8080'));
    } catch (error) {
        console.log(error);
    }
};

startServer();
