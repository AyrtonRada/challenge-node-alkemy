const {check} = require('express-validator')

const validacionesPersonaje_detail = [
        check('idMovie')
            .notEmpty().withMessage('Inserte el ID de la pelicula a asociar')
            .isNumeric().withMessage('Sólo se permiten números enteros'),
        check('idCharacter')
        .notEmpty().withMessage('Inserte el ID de la personaje a asociar')
        .isNumeric().withMessage('Sólo se permiten números enteros')
]

module.exports = validacionesPersonaje_detail 