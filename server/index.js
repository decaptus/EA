import express from 'express';                      //in new versoins of node we can use the important syntax
import bodyParser from 'body-parser';                 //not necessary with express 4.16+
import mongoose from 'mongoose';
import cors from 'cors';

import bulletinRoutes from './routes/bulletin.js';

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))                 //bodyparser esta en desuso, voy a probar con express
app.use(express.urlencoded({ limit: '30mb', extended: true }))            //limito el tamaño, puede q no sea necessario para nuestra aplicacions
app.use(cors());

app.use('/posts', bulletinRoutes);

const CONNECTION_URL = 'mongodb+srv://titu:titu1234@cluster0.qghtm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 4000;

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Base MongoDB conectad, servidor corriendo en el puerto: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} no se pudo conectar`));


