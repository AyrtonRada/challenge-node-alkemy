let express = require('express')
let router = express.Router()
const uploadFile = require('../middleware/multerMiddleware')
const movieController = require('../controller/moviesController')

//localhost:3000/movies
router.get('/', movieController.movies)

module.exports = router