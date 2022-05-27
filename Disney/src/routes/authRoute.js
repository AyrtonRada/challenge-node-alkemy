var express = require('express');
var router = express.Router();
const authController = require('../controller/authAPIController')
const validacionesRegister = require('../middleware/authRegisterMiddleware')
const validacionesLogin = require('../middleware/authLoginMiddleware')

/******user login y register******/

//localhost:3000/api/auth
router.post('/register', validacionesRegister, authController.registerProcess)
router.post('/login',validacionesLogin, authController.loginProcess)

module.exports = router;
