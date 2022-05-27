let express = require('express')
let router = express.Router()
const characterController = require('../controller/characterAPIController')
const validacionesCharacter = require('../middleware/characterMiddleware')
const uploadFile = require('../middleware/multerMiddleware')
const verificarToken = require('../middleware/authTokenMiddleware')

//localhost:3000/api/characters
router.get('/',verificarToken, characterController.characters)
router.get('/detail/:id',verificarToken, characterController.charactersDetail)
router.get('/search', verificarToken, characterController.search)
router.post('/create', verificarToken, uploadFile.single('imagen'), validacionesCharacter, characterController.charactersCreate)
router.put('/update/:id', verificarToken, uploadFile.single('imagen'), validacionesCharacter, characterController.charactersUpdate)
router.delete('/delete/:id', verificarToken, characterController.charactersDestroy)

module.exports = router