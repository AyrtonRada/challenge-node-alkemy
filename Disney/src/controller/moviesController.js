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


}

module.exports = movieController