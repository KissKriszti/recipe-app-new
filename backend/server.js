import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import recipeRouter from './routes/recipeRoutes.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use(express.json());
app.use('/', recipeRouter);

mongoose.connect(process.env.URI)
.catch((e) => {
    console.error(e.message)
});

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));