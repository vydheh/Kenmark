
const usercontrol = require('../controllers/userController')
const express = require('express');
const token_verify = require('../middleware/tokenVerify');
const router = express.Router();

router.post('/create',token_verify,usercontrol.adduser);
router.post('/read',usercontrol.readUser);
router.post('/update',usercontrol.updateUser);
router.post('/delete',usercontrol.deleteUser);

module.exports = router;
