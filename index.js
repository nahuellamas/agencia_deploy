import express from 'express';
import router from './routes/index.js';
import DB from './config/db.js';

import dotenv from 'dotenv';
dotenv.config({path:"variables.env"});

const app = express();

//conectar BASE DE DATOS
DB.authenticate()
    .then( () => console.log("Base de datos conectada") )
    .catch( error => console.log("Base de Datos no conectada error") );

//definir PUERTO y HOST
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 4000;

//habilitar pug
app.set('view engine', 'pug');

//DEFINIMOS AÑO ACTUAL
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.ActualYear = year.getFullYear();
    res.locals.NombreSitio = "Agencia de Viajes";
    next();
});

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }))
 
//Definir la carpeta publica
app.use(express.static('public'))
 
//agregar router
app.use('/', router)
 
app.listen(port, host, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`)
})

