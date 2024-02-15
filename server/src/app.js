// console.log('Hello');
import express from 'express';
import {config} from 'dotenv';
import cors from 'cors';
import mysql from 'mysql2';
config()

// builds the express server
const app = express();
// enables cors to function
app.use(cors());
// enables my express json 
app.use(express.json());
const PORT = process.env.PORT

//1. create a mysql connection 
const pool = mysql
.createPool({
    host: process.env.HOST,
    user : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE,
}).promise();

//2. connect to database

//check my get function is working
app.get('/', (req,res)=>{
    res.send({
        message: "Welcome!"
    })
})

//app.post
//connected to my frontend: authentication
app.post('/register', (req,res)=>{
    res.send({
        message: 'Hello ${req.body.email}!, User was successfully registered'
    })
})


app.listen(process.env.PORT || 8081)
    // console.log('http://localhost:'+PORT);
// });