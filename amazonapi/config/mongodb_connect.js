const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI,{}).then(()=>{
    console.log('Connected to MongoDB!');
}).catch((error)=>{
    console.log(error.message);
})

const userSchema = {
    firstname: String,
    lastname: String,
    mobileno: String,
    email: String,
    password: String,
    image: String
};

const user = mongoose.model('user',userSchema);

module.exports = user;