const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;
const cors = require('cors');

const corsOptions = {
    origin: 'https://mern-crud-app-frontend-aa9e.onrender.com',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/',(request,response)=>{
    response.send("Hey! There I'm Soumya Majumder. Want to connect with me???");
})

const publicDirectory = path.join(__dirname,'./public');

app.use(express.static(publicDirectory));

app.use('/users', require('./routes/usersroute'));

app.listen(port,()=>{
    console.log(`Server has started at ${port}`);
    
})