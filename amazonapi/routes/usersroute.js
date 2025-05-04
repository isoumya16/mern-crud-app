const express = require('express');
const usercontroller = require('../controllers/userscontroller');

const router = express.Router();

router.get('/userlist',usercontroller.userlist);
router.get('/singleuserlist/:id',usercontroller.singleuserlist);
router.delete('/deleteuser/:id',usercontroller.deleteuser);
router.put('/updateuser/:id',usercontroller.updateuser);
router.put('/updateprofileimage/:id',usercontroller.uploadimage,usercontroller.updateprofileimage);
router.post('/registration',usercontroller.registration);
router.post('/login',usercontroller.login);

module.exports = router;