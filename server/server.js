import express from "express";
import dbConnect from "./database/connection.js";
import cors from 'cors'
import studentRouter from "./routers/studentRouter.js"


const app = express();

app.use(
    cors({
      origin: ["https://studentaddition.netlify.app"],
      credentials: true,
    })
  );

dbConnect();

app.use(express.json({limit: '50mb'}));

app.use('/students', studentRouter);

app.listen(3001, () => console.log(`Server running on port 3001`));