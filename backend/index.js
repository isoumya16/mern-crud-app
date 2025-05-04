const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const port = process.env.PORT || 5000;
app.use(express.json());

const publicDirectory = path.join(__dirname,'./public');

app.use(express.static(publicDirectory));

app.use('/items', require('./routes/itemroutes'));

app.listen(port,()=>{
    console.log(`Server has started at ${port}`);
    
})