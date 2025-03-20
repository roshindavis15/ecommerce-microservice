import express from 'express';
import pg from 'pg';
const { Pool } = pg;
import cors from 'cors';
import { configDotenv } from 'dotenv';
configDotenv()
import router from './routes/productRoute.js';
import './config/db.js';
 

const app= express();
const PORT=process.env.PORT;

app.use(express.json());
app.use(cors());



app.use('/products',router);

app.listen(PORT,()=>{
    console.log(`product service running on port ${PORT}`);
})
  