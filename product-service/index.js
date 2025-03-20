import express from 'express';
import  {pool} from 'pg';
import cors from 'cors';
import { configDotenv } from 'dotenv';;

const app= express();
const PORT=process.env.PORT;

app.use(express.json());
app.use(cors());

initDB();

app.use('/products',productRoutes);

app.listen(PORT,()=>{
    console.log(`product service running on port ${PORT}`);
})
  