const {validationResult} = require('express-validator')
const db = require('../database/models/Index')
const {Op} = require('sequelize')

const movieController = {
    /*********LISTA DE PELICULAS/SERIES *********/
    movies: async(req,res) => {
        await db.Pelicula_serie.findAll({ attributes: ["imagen", "titulo", "fechaDeCreacion"]})
        .then((personaje) => {
            res.json(personaje)
        })
    },

    /*********DETALLES DE LAS PELICULAS/SERIES *********/
    moviesDetail: async (req,res) => {
        await db.Pelicula_serie.findAll()
        .then((respuesta) => {
            res.json(respuesta)
        })
    },

    /*********CREAR PELICULA/SERIE *********/
    moviesCreate: async(req,res) => {
        //validacion de existencia de los datos para crear pelicula/serie
        const errores = validationResult(req)
        
        if (errores.errors.length > 0 ) {
            return res.send( {errors: errores.mapped()})
        }

        //crear un pelicula/serie
        await db.Pelicula_serie.create({
            imagen: req.file.filename,
            titulo: req.body.titulo,
            fechaDeCreacion: req.body.fechaDeCreacion,
            calificacion: req.body.calificacion
        })
        .then(()=> {
            res.send('Pelicula/Serie creada')
        })
    },

    /*********ACTUALIZAR PELICULA/SERIE *********/
    moviesUpdate: async(req,res) =>{
      //validacion de existencia de los datos para editar pelicula/serie
      const errores = validationResult(req)
        
      if (errores.errors.length > 0 ) {
          return res.send( {errors: errores.mapped()})
      }

      //editar personaje
      await db.Pelicula_serie.update({
        imagen: req.file.filename,
        titulo: req.body.titulo,
        fechaDeCreacion: req.body.fechaDeCreacion,
        calificacion: req.body.calificacion
      },{
          where: {id: req.params.id}
      })
      .then(()=> {
          res.send(`Pelicula/Serie con id: ${req.params.id} actualizada`)
      })
    },
    /*********ELIMINAR PERSONAJE *********/
    moviesDestroy: async(req,res)=>{
        await db.Pelicula_serie.destroy({
            where: {id: req.params.id}
        })
        .then(()=>{
            res.send(`Pelicula/Serie con id: ${req.params.id} eliminada`)
        })
    }


}

module.exports = movieController