import express from "express";
import dotenv from 'dotenv';
// import bodyParser from "body-parser";
import './db/connection.js';
import auth from "./routes/auth.js";
import router from "./routes/rooms.js";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config({ path: './config.env' });

// app.use(bodyParser.json({ limit: "30mb", extended: true })); 
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(express.json());
app.use(cookieParser);

app.use('/auth', auth);
app.use('/hotels', router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is on ${PORT}`);
});