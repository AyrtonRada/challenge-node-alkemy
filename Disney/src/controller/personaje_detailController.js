const {validationResult} = require('express-validator')
const db = require('../database/models/Index')


const personaje_detailController = {
    /*********LISTA DE PELICULAS/PERSONAJES *********/
    personaje_detail: async(req,res)=>{
        await db.Personaje_detail.findAll({
            attributtes: ["personajeAsociada","pelicula_serie_asociada"]
        })
        .then((respuesta)=> {
            res.status(200).json( respuesta)
        })
        .catch(error =>{ 
            res.status(404).send(error)
        })
    },

    /*********CREAR ASOCIACION ENTRE PELICULA/PERSONAJE *********/
    personaje_detailCreate : async(req,res) => {
        //validacion de existencia de los datos para crear asociacion entre pelicula/personaje
        const errores = validationResult(req)
        
        if (errores.errors.length > 0 ) {
            return res.status(400).send( {errors: errores.mapped()})
        }

        //crear la asociacion entre pelicula/personaje
        await db.Personaje_detail.create({
            pelicula_serie_asociada: req.params.idMovie,
            personajeAsociada: req.params.idCharacter
        })
        .then(()=> {
            res.status(201).send('Asociacion realizada con éxito')
        })
        .catch(error =>{ 
            res.status(400).send(error)
        })
    },

    /*********ACTUALIZAR ASOCIACION ENTRE PELICULA/PERSONAJE *********/  
    Personaje_detailUpdate: async(req,res) => {
         //validacion de existencia de los datos para editar pelicula/personaje
      const errores = validationResult(req)
        
      if (errores.errors.length > 0 ) {
          return res.status(400).send( {errors: errores.mapped()})
      }

       //editar pelicula/personaje
        await db.Personaje_detail.update({
            pelicula_serie_asociada: req.params.idMovie,
                personajeAsociada: req.params.idCharacter
        },{
            where: {id: req.params.id}
        })
        .then(()=>{
            res.status(201).send(`La asociación con id: ${req.params.id} fue actualizada`)
        })
        .catch(error =>{ 
            res.status(400).send(error)
        })
    }
    
}

module.exports = personaje_detailController