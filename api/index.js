import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js'
dotenv.config();


mongoose.connect(process.env.MONGODB_URL)
    .then(() => { console.log('Database connected'); })
    .catch((err) => { console.log(err); });

const app = express();

app.use(express.json());


app.listen(4000, () => {
    console.log('listening on port 4000');
});



app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Sever Error';
    res.status(statusCode).json({ success: false, statusCode, message });
});