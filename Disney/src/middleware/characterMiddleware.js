const {body} = require('express-validator')
const path = require('path')

const validacionesCharacter = [
    body('imagen').custom((value, {req})=>{
        let file = req.file
        let extensionesAceptadas = ['.jpg', '.png', '.jpeg']
        if(!file){
            throw new Error ('Agrega una imagen')
        }else{
            let extensionFile = path.extname(file.originalname)
            if (!extensionesAceptadas.includes(extensionFile)){
            throw new Error ('Las extensiones permitidas son .jpg, .png, .jpeg')
            }
        }
        return true;
    }),
    body('nombre')
        .notEmpty().withMessage('Escribe el nombre'),
    body('edad')
        .notEmpty().withMessage('Escribe la edad')
        .isNumeric().withMessage('Sólo se permiten números'),
    body('peso')
        .notEmpty().withMessage('Escribe el peso')
        .isNumeric().withMessage('Sólo se permiten números'),
    body('historia')
        .notEmpty().withMessage('Escribe la historia')
        .isLength({min:25}).withMessage("La historia debe tener al menos 25 caracteres"),
    body('pelicula_serie_asociada')
        .notEmpty().withMessage('Escribe la película o serie asociada')
]

module.exports = validacionesCharacter