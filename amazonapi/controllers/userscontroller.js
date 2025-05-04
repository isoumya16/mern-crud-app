const multer = require('multer');

const users = require("../config/mongodb_connect");

exports.registration = (request, response) => {
    const registrationData = {
        firstname: request.body.firstname,
        lastname: request.body.lastname,
        mobileno: request.body.mobileno,
        email: request.body.email,
        password: request.body.password
    }

    const userData = new users(registrationData);

    userData.save()

    response.send(JSON.stringify({ 'message': 'User Created Successfully!' }))
}

exports.updateuser = async (request, response) => {
    const updatedData = {
        firstname: request.body.firstname,
        lastname: request.body.lastname,
        mobileno: request.body.mobileno,
        email: request.body.email,
        password: request.body.password
    }

    let users_id = { _id: request.params.id };
    let userData = await users.updateOne(users_id, updatedData);

    response.send(JSON.stringify({ 'message': userData }))
}

exports.deleteuser = async (request, response) => {
    let users_id = { _id: request.params.id };
    let userData = await users.deleteOne(users_id);
    response.send(JSON.stringify({ 'message': userData }));
}

exports.userlist = async (request, response) => {
    let usersData = await users.find();
    response.send(JSON.stringify({ 'message': usersData }));
}

exports.singleuserlist = async (request, response) => {
    let users_id = { _id: request.params.id };
    let userData = await users.findOne(users_id);
    response.send(JSON.stringify({ 'message': userData }));
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public');
    }, filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

exports.uploadimage = multer({ storage: storage }).single('image');
exports.updateprofileimage = async (request, response) => {
    let users_id = request.params.id;
    imageData = { image: request.file.path };

    await users.findByIdAndUpdate(users_id, imageData).then(() => {
        response.send(JSON.stringify({ 'message': 'Image Uploaded!' }))
    }).catch((error) => {
        response.send(JSON.stringify({ 'message': error.message }))
    });


}

exports.login = async (request,response)=>{
    let email = request.body.email
    let password = request.body.password
    let loginEmail = {"email":email}
   
    await users.findOne(loginEmail).then((res)=>{
        if(res){
            if(res.password == password){
                response.send(JSON.stringify({'message': 'user exists!'}))  
            }else{
                response.send(JSON.stringify({'message':"result not found"}))
            }
        }else{
           response.send(JSON.stringify({'message':"result not found"}))
        }
    }).catch((error)=>{
        response.send(JSON.stringify({'message':error}))
    })

}