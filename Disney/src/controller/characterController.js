const {validationResult} = require('express-validator')
const db = require('../database/models/Index')

const characterController = {

    characters: async (req,res) => {
         await db.Personaje.findAll()
         .then((personaje)=> {
             res.send({
                 imagen: personaje.imagen, 
                 nombre: personaje.nombre
                })
         })
    },
    



}

module.exports = characterController