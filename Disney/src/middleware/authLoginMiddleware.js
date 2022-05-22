const {body} = require('express-validator')

const validacionesLogin = [
    body('email').notEmpty().withMessage('Ingrese su email')
        .isEmail().withMessage('Ingrese un email válido'),
    body('contraseña')
        .notEmpty().withMessage('Escribe la contraseña')

]

module.exports = validacionesLogin