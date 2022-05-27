const {validationResult} = require('express-validator')
const db = require('../database/models/Index')
const {Op} = require('sequelize')

const characterAPIController = {

     /*********LISTA DE PERSONAJES *********/
    characters: async (req,res) => {
        //encontrar todos los personajes para mostrar imagen y nombre
         await db.Personaje.findAll({attributes:["imagen","nombre"]})
         .then((personaje)=> {
            res.status(200).json(personaje)
         })
         .catch(error =>{ 
             res.status(404).send(error)
         })
    },
     /*********DETALLES DE LOS PERSONAJES *********/

    charactersDetail: async (req,res) => {
        let id = req.params.id
        await db.Personaje.findByPk(id,{
            include:[{association:"pelicula_serie"}
        ]})
        .then((respuesta) => {
            res.status(200).json(respuesta)
        })
        .catch(error =>{ 
            res.status(404).send(error)
        })
    },

     /*********CREAR PERSONAJE *********/
    charactersCreate: async(req,res) => {
        //validacion de existencia de los datos para crear personaje
        const errores = validationResult(req)
        
        if (errores.errors.length > 0 ) {
            return res.status(400).send( {errors: errores.mapped()})
        }

        //crear un personaje
        await db.Personaje.create({
            imagen: req.file.filename,
            nombre: req.body.nombre,
            edad: req.body.edad,
            peso: req.body.peso,
            historia: req.body.historia
        })
        .then(()=> {
            res.status(201).send('Personaje creado')
        })
        .catch(error =>{ 
            res.status(400).send(error)
        })
    },

    /*********ACTUALIZAR PERSONAJE *********/
    charactersUpdate: async(req,res) =>{
      
      //validacion de existencia de los datos para editar personaje
      const errores = validationResult(req)
        
      if (errores.errors.length > 0 ) {
          return res.status(400).send( {errors: errores.mapped()})
      }

      //editar personaje
      await db.Personaje.update({
        imagen: req.file.filename,
        nombre: req.body.nombre,
        edad: req.body.edad,
        peso: req.body.peso,
        historia: req.body.historia
      },{
          where: {id: req.params.id}
      })
      .then(()=> {
          res.status(201).send(`Personaje con id: ${req.params.id} actualizado`)
      })
      .catch(error =>{ 
        res.status(400).send(error)
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
        .catch(error =>{ 
            res.status(400).send(error)
        })
    },

    /*********FILTRAR PERSONAJE *********/
    search: async(req,res) => {
        let {name, age, weight, idMovie} = req.query
        await db.Personaje.findAll({
            where: {
                [Op.or]: [{
                    nombre: { [Op.like]: "%" + name + "%" },
                    },{
                    edad: { [Op.like]: "%" + age + "%" },
                    },{
                    peso:  { [Op.like]: "%" + weight + "%" },
                    }]
            },
            include:[{association:"pelicula_serie"}]
        })
        .then((respuesta)=> {
            res.status(200).json(respuesta)
        })
        .catch(error =>{ 
            res.status(404).send(error)
        })
    }
}

module.exports = characterAPIController