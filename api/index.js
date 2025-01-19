import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGODB_URL)
    .then(() => { console.log('Database connected'); })
    .catch((err) => { console.log(err); });
const app = express();

app.listen(4000, () => {
    console.log('listening on port 4000')
});

//C97Gnyt9cadMxPvE
//gadnadjar