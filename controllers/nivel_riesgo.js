const express = require('express');
const nivel_riesgo = require('../models/nivel_riesgo_model');
const ruta = express.Router();

ruta.get('/', (req,res) =>{
    res.json('Respuesta a petición GET de Nivel de riesgo funcionando correctamente');
});
module.exports = ruta;
