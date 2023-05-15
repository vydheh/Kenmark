
const usercontrol = require('../controllers/userController')
const express = require('express');
const token_verify = require('../middleware/tokenVerify');
const router = express.Router();

router.post('/user/login',usercontrol.UserLogin)
router.get('/create',token_verify,usercontrol.adduser);
router.post('/read',token_verify,usercontrol.readUser);
router.post('/update',token_verify ,usercontrol.updateUser);
router.post('/delete',token_verify ,usercontrol.deleteUser);
module.exports = router;
