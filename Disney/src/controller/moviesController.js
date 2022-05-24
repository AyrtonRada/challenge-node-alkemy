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
    }

}

module.exports = movieController