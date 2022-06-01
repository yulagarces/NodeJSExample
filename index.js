const express = require('express');
const mysql = require('mysql');
const nivel_riesgo = require('./controllers/nivel_riesgo');

const conexion = mysql.createConnection({
    host:'212.1.208.101',
    port:3306,
    database:'u214255937_citobot',
    user:'u214255937_citobot_admin',
    password:'k3D/MZOZ3A$'
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//end points(recursos)
app.use('/api/nivel_riesgo', nivel_riesgo);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Api REST Ok,  y ejecutandose...');
});

