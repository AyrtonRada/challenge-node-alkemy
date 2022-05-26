const {validationResult} = require('express-validator')
const bcryptjs = require('bcryptjs')
const db = require('../database/models/Index')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()
const secretKey = process.env.SECRETKEY || 'CLAVESECRETA'

const authController = {

    /********* REGISTRAR USUARIO *********/
    registerProcess: async (req, res) => {
        //validacion de existencia de los datos para registrar
        const errores = validationResult(req)
        
        if (errores.errors.length > 0 ) {
            return res.status(400).send( {errors: errores.mapped()})
        }

        //verificar si existe el email que está siendo registrado
        let userInDb = await db.Auth.findOne({
            where: { email: req.body.email }
            })

        if (userInDb) {
            return res.status(200).send('Este email ya está registrado')
        }

        //registrara el usuario
        await db.Auth.create({
            nombreUsuario: req.body.nombreUsuario,
            email: req.body.email,
            contraseña: bcryptjs.hashSync(req.body.contraseña)
            })
        return res.status(200).send('Usuario creado')
    },

    /********* LOGUEAR USUARIO *********/
    loginProcess: async (req, res) => {
            //validacion de existencia de los datos para logear
            const errores = validationResult(req)
            
            if (errores.errors.length > 0 ) {
                return res.status(400).send({
                    errors: errores.mapped()
                })
            }
            //verificar si existe en la base de datos el email insertado
            let userLogin = await db.Auth.findOne({where: {email: req.body.email}})
            
            if (!userLogin) {
                return res.status(400).send({errors: 'El email no está registrado'})
            }else{
                // comparar las contraseñas
                let constraseñaOK = bcryptjs.compareSync(req.body.contraseña, userLogin.contraseña)
                if(!constraseñaOK){
                  return  res.status(400).send('Contraseña incorrecta')
                }
                //generar el token con jwt
                const token = jwt.sign({email: userLogin.email}, secretKey, {expiresIn: "2h"})
                return res.status(200).json({token}) 
            }           
    }
}
module.exports = authController