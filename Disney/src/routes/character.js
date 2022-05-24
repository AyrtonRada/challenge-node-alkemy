let express = require('express')
let router = express.Router()
const characterController = require('../controller/characterController')
const validacionesCharacter = require('../middleware/characterMiddleware')
const uploadFile = require('../middleware/multerMiddleware')
const verificarToken = require('../middleware/authTokenMiddleware')

//localhost:3000/characters
router.get('/', characterController.characters)
router.get('/detail', characterController.charactersDetail)
router.post('/create', uploadFile.single('imagen'), validacionesCharacter, characterController.charactersCreate)
router.put('/update/:id', uploadFile.single('imagen'), validacionesCharacter, characterController.charactersUpdate)
router.delete('/delete/:id', characterController.charactersDestroy)
router.get('/search', characterController.search)

module.exports = router