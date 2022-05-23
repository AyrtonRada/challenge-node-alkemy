const {validationResult} = require('express-validator')
const db = require('../database/models/Index')

const characterController = {

     /*********LISTA DE PERSONAJES *********/
    characters: async (req,res) => {
        //encontrar todos los personajes para mostrar imagen y nombre
         await db.Personaje.findAll()
         .then((personaje)=> {
             res.send({
                 imagen: personaje.imagen, 
                 nombre: personaje.nombre
                })
         })
    },
     /*********CREAR PERSONAJE *********/
    charactersCreate: async(req,res) => {
        //validacion de existencia de los datos para crear personaje
        const errores = validationResult(req)
        
        if (errores.errors.length > 0 ) {
            return res.send( {errors: errores.mapped()})
        }

        //crear un personaje
        await db.Personaje.create({
            imagen: req.body.imagen,
            nombre: req.body.nombre,
            edad: req.body.edad,
            peso: req.body.peso,
            history: req.body.history,
            pelicula_serie_asociada: req.body.pelicula_serie_asociada
        })
        .then(()=> {
            res.send('Personaje creado')
        })
    },

    /*********ACTUALIZAR PERSONAJE *********/
    charactersUpdate: async(req,res) =>{
      //encontrar el personaje a editar
      await db.Personaje.findByPk(req.params.id)
      
      //validacion de existencia de los datos para editar personaje
      const errores = validationResult(req)
        
      if (errores.errors.length > 0 ) {
          return res.send( {errors: errores.mapped()})
      }

      //editar personaje
      await db.Personaje.update({
        imagen: req.body.imagen,
        nombre: req.body.nombre,
        edad: req.body.edad,
        peso: req.body.peso,
        history: req.body.history,
        pelicula_serie_asociada: req.body.pelicula_serie_asociada
      }),{
          where: {id: req.params.id}
      }
      .then(()=> {
          res.send(`Personaje con id: ${req.params.id} actualizado`)
      })
    },

     /*********ELIMINAR PERSONAJE *********/
     charactersDestroy: async(req,res) => {
        await db.Personaje.destroy({
            where: {id: req.params.id}
        })
        .then(()=>{
            res.send(`Personaje con id: ${req.params.id} eliminado`)
        })
     }
}

module.exports = characterController