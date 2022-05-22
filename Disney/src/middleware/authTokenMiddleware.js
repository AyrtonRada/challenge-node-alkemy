const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()
const secretKey = process.env.SECRETKEY || 'CLAVESECRETA'
const verificarToken = (req,res)=> {

    let token = req.headers['access-token']

    //verificar si el token está en el header
    if(!token){
        return res.send('No estás autorizado para consumir éste endpoint')
    }

    //si el token existe verificar el obtenido
    jwt.verify(token, secretKey, async(err,decoded)=>{
        if(err){
            res.send('Acceso denegado, su token caducó o es incorrecto')
        }
    })
}
module.exports = verificarToken