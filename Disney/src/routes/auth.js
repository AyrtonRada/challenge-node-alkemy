var express = require('express');
var router = express.Router();
const authController = require('../controller/authController')
const validacionesRegister = require('../middleware/authRegisterMiddleware')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/******user login y register******/

//localhost:3000/auth/register
router.post('/register', validacionesRegister,authController.registerProcess)


module.exports = router;
