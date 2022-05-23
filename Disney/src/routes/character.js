let express = require('express')
let router = express.Router()
const characterController = require('../controller/characterController')
const validacionesCharacter = require('../middleware/characterMiddleware')
const uploadFile = require('../middleware/multerMiddleware')
const verificarToken = require('../middleware/authTokenMiddleware')

//localhost:3000/characters
router.get('/', characterController.characters)
router.post('/Create', uploadFile.single('imagen'), validacionesCharacter, characterController.charactersCreate)
router.put('/Update/:id', uploadFile.single('imagen'), validacionesCharacter, characterController.charactersUpdate)
router.delete('/Delete/:id', characterController.charactersDestroy)

module.exports = router