const {validationResult} = require('express-validator')
const db = require('../database/models/Index')
const {Op} = require('sequelize')

const movieController = {
    /*********LISTA DE PELICULAS/SERIES *********/
    movies: async(req,res) => {
        await db.Pelicula_serie.findAll({ attributes: ["imagen", "titulo", "fechaDeCreacion"]})
        .then((personaje) => {
            res.status(200).json(personaje)
        })
        .catch(error =>{ 
            res.status(404).send(error)
        })
    },

    /*********DETALLES DE LAS PELICULAS/SERIES *********/
    moviesDetail: async (req,res) => {
        let id = req.params.id
        await db.Pelicula_serie.findByPk(id,
            {include:[{association:"personajes"}]}
        )
        .then((respuesta) => {
            res.status(200).json(respuesta)
        })
        .catch(error =>{ 
            res.status(404).send(error)
        })
    },

    /*********CREAR PELICULA/SERIE *********/
    moviesCreate: async(req,res) => {
        //validacion de existencia de los datos para crear pelicula/serie
        const errores = validationResult(req)
        
        if (errores.errors.length > 0 ) {
            return res.status(400).send( {errors: errores.mapped()})
        }

        //crear un pelicula/serie
        await db.Pelicula_serie.create({
            imagen: req.file.filename,
            titulo: req.body.titulo,
            fechaDeCreacion: req.body.fechaDeCreacion,
            calificacion: req.body.calificacion
        })
        .then(()=> {
            res.status(201).send('Pelicula/Serie creada')
        })
        .catch(error =>{ 
            res.status(400).send(error)
        })
    },

    /*********ACTUALIZAR PELICULA/SERIE *********/
    moviesUpdate: async(req,res) =>{
      //validacion de existencia de los datos para editar pelicula/serie
      const errores = validationResult(req)
        
      if (errores.errors.length > 0 ) {
          return res.status(400).send( {errors: errores.mapped()})
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
          res.status(201).send(`Pelicula/Serie con id: ${req.params.id} actualizada`)
      })
      .catch(error =>{ 
        res.status(400).send(error)
    })
    },
    /*********ELIMINAR PERSONAJE *********/
    moviesDestroy: async(req,res)=>{
        await db.Pelicula_serie.destroy({
            where: {id: req.params.id}
        })
        .then(()=>{
            res.status(200).send(`Pelicula/Serie con id: ${req.params.id} eliminada`)
        })
        .catch(error =>{ 
            res.status(404).send(error)
        })
    },

    /*********FILTRAR PELICULA/SERIE *********/
    search: async(req,res) => {
        let {title, order} = req.query //*order === ASC||DESC
        await db.Pelicula_serie.findAll({
            where: {
                [Op.or]: [{
                    titulo: { [Op.like]: "%" + title + "%" },
                    }]
                },
                order: [['fechaDeCreacion', order ]]
        })
        .then((respuesta)=> {
            res.status(200).json(respuesta)
        })
        .catch(error =>{ 
            res.status(404).send(error)
        })
    }
}

module.exports = movieController