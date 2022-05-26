let express = require('express')
let router = express.Router()
const validacionesPersonaje_detail = require('../middleware/personaje_detailMiddleware')
const personaje_detail = require('../controller/personaje_detailController')

//localhost:300/associations
router.get('/', personaje_detail.personaje_detail)
router.post('/create/movie/:idMovie/character/:idCharacter', validacionesPersonaje_detail, personaje_detail.personaje_detailCreate)
router.put('/update/:id/movie/:idMovie/character/:idCharacter', validacionesPersonaje_detail, personaje_detail.Personaje_detailUpdate)

module.exports = router