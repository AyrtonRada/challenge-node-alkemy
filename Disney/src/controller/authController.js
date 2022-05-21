const {validationResult} = require('express-validator')
const bcryptjs = require('bcryptjs')
const db = require('../database/models')


const authController = {
    registerProcess: async (req, res) => {
        //validacion de existencia de los datos para registrar
        const errores = validationResult(req);
        
        if (errores.errors.length > 0 ) {
            return res.send( {errors: errores.mapped()})
        }

        //verificar si existe el email que está siendo registrado
        let userInDb = await db.Auth.findOne({
            where: { email: req.body.email }
            })

        if (userInDb) {
            return res.send('Este email ya está registrado')
        }

        //registrara el usuario
        await db.Auth.create({
            nombre: req.body.nombre,
            email: req.body.email,
            contraseña: bcryptjs.hashSync(req.body.password)
            })
        return res.send('Usuario creado');
    }
}
module.exports = authController