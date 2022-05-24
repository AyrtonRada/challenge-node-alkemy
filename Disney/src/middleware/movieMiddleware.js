const {body} = require('express-validator')
const path = require('path')

const validacionesMovie = [
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
    body('titulo')
        .notEmpty().withMessage('Escribe el título'),
    body('fechaDeCreacion')
        .notEmpty().withMessage('Escribe la fecha de creación')
        .isDate(),
    body('calificacion')
        .notEmpty().withMessage('Escribe una calificaion del 1 al 5')
        .isNumeric({min: 1, max: 5}).withMessage('Sólo se permiten números del 1 al 5')
]

module.exports = validacionesMovie