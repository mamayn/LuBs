const express = require('express');
const app = express();
const mysql = require ('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Nazar376853490',
    database: 'pubbd'
});

app.post("/create",(req , res) =>{
    const name = req.body.name;
    const information = req.body.information;
    const rating = req.body.rating;

    db.query("INSERT INTO pubs (name,information,rating) VALUES (?,?,?)", [name,information,rating], (err,result) => {
        if (err) {
            console.log(err)
        } else {
            res.send ("Values inserted")
        }
    })
});

app.get('/pubs',(req , res) => {
    db.query("SELECT * FROM pubs", (err,result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.listen(3001, () => {
    console.log("Yey,your server is running in port 3001")
})  