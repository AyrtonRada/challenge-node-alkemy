const {body} = require('express-validator')

const validacionesPersonaje_detail = [
        body('idMovie')
            .notEmpty().withMessage('Inserte el ID de la pelicula a asociar')
            .isNumeric().withMessage('Sólo se permiten números enteros'),
        body('idCharacter')
        .notEmpty().withMessage('Inserte el ID de la personaje a asociar')
        .isNumeric().withMessage('Sólo se permiten números enteros')
]

module.exports = validacionesPersonaje_detail 