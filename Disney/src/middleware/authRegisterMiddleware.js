const {body} = require('express-validator')

const validacionesRegister = [
    body('nombreUsuario')
        .notEmpty().withMessage('Complete con un nombre'),
    body('email').notEmpty().withMessage('Complete con un email')
        .isEmail().withMessage('Ingrese un email válido'),
    body('contraseña')
        .notEmpty().withMessage('Escribe una contraseña')

]

module.exports = validacionesRegister