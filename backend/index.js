// index.js
import express from 'express';
import cors from 'cors';
import authRouter from './routes/authRoutes.js';
import { connectDB } from './config/db.js'; // Import only connectDB
import 'dotenv/config';


const port = 3000;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes

app.use('/auth', authRouter);



// Connect to MongoDB
connectDB(); // Call the function to connect to the database

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
