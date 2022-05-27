var express = require('express');
var router = express.Router();
const authController = require('../controller/authController')
const validacionesRegister = require('../middleware/authRegisterMiddleware')
const validacionesLogin = require('../middleware/authLoginMiddleware')

/******user login y register******/

//localhost:3000/auth
router.post('/register', validacionesRegister, authController.registerProcess)

//localhost:3000/auth
router.post('/login',validacionesLogin, authController.loginProcess)

module.exports = router;
