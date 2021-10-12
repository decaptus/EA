import express from 'express';                      //in new versoins of node we can use the important syntax
import bodyParser from 'body-parser';                 //not necessary with express 4.16+
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import bulletinRoutes from './routes/bulletin.js';
import userroutes from './routes/user.js';
import questionRoutes from './routes/question.js';

import config from './config.js'

dotenv.config();

const app = express();


app.use(express.json({ limit: '30mb', extended: true }))                 //bodyparser esta en desuso, voy a probar con express
app.use(express.urlencoded({ limit: '30mb', extended: true }))            //limito el tamaño, puede q no sea necessario para nuestra aplicacions
app.use(cors());

app.use('/posts', bulletinRoutes);
app.use('/user', userroutes);
app.use('/questions',questionRoutes);





mongoose.connect(process.env.CONNECTION_URL)
  .then(() => app.listen(process.env.PORT, () => console.log(`Base MongoDB conectad, servidor corriendo en el puerto: http://localhost:${process.env.PORT}`)))
  .catch((error) => console.log(`${error} no se pudo conectar`));


