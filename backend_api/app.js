const mysql = require('mysql');
const dbConnect = require('./db.js');
const express = require('express');
const path = require('path');
const e = require('express');

dbConnect.db.connect(err =>{
    if(err){
        console.log(err);
    }else{
        console.log(new Date() + ' -> Connection successfully made');
    }
});


const app = express();

app.get('/', (req, res) => {
    console.log('this works');
});

app.get('/createtable', (req, res) => {
    let sql = 'create table languages(lang_id int primary key, content json);'
    dbConnect.db.query(sql, (err, result) =>{
        if(err) console.log(err);
        else{
            console.log('success');
        }
    })
})


app.listen(dbConnect.PORT, () => {
    console.log(
        `${new Date()} -> Application listening to port ${dbConnect.PORT}`
        );
})