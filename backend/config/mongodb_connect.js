const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI;

mongoose.connect(uri,{}).then(()=>{
    console.log('Connected to MongoDB!');
}).catch((error)=>{
    console.log(error.message);
})

const itemSchema = {
    name: String,
    description: String
};

const item = mongoose.model('item',itemSchema);

module.exports = item;