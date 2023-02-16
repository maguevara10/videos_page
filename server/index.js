const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'pag_padre'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/getUsuario', (req, res) => {
    const sqlSelect = "SELECT * FROM usuario;";
    db.query(sqlSelect, (error, result) => {
        if (error)
            throw error;

        res.send(result);
    });
});

app.put('/api/usuActualizarS', (req, res)=>{
    const sqlActualizar = "UPDATE usuario SET usu_Activo = 'S' WHERE usu_Id = ?;"
    const usu_Id = req.body.usu_Id;
    db.query(sqlActualizar, [usu_Id], (error, result)=>{
        if(error)
        throw error;

    })
})
app.put('/api/usuActualizarN', (req, res)=>{
    const sqlActualizar = "UPDATE usuario SET usu_Activo = 'N' WHERE usu_Id = ?;"
    const usu_Id = req.body.usu_Id;
    db.query(sqlActualizar, [usu_Id], (error, result)=>{
        if(error)
        throw error;

    })
})

app.listen(3001, () => {
    console.log("Corriendo en el puerto 3001");
});