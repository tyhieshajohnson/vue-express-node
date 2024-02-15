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

//create a mysql connection 
const pool = mysql
.createPool({
    host: process.env.HOST,
    user : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE,
}).promise();

//connect to database


app.get('/', (req,res)=>{
    res.send({
        message: "Welcome!"
    })
})

const PORT = process.env.PORT

app.listen(PORT,()=> {
    console.log('http://localhost:'+PORT);
});