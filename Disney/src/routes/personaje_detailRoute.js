let express = require('express')
let router = express.Router()
const personaje_detail = require('../controller/personaje_detailAPIController')
const validacionesPersonaje_detail = require('../middleware/personaje_detailMiddleware')
const verificarToken = require('../middleware/authTokenMiddleware')

//localhost:300/api/associations
router.get('/', verificarToken, personaje_detail.personaje_detail)
router.post('/create', verificarToken, validacionesPersonaje_detail, personaje_detail.personaje_detailCreate)
router.put('/update', verificarToken, validacionesPersonaje_detail, personaje_detail.Personaje_detailUpdate)

module.exports = router