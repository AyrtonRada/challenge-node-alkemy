let express = require('express')
let router = express.Router()
const uploadFile = require('../middleware/multerMiddleware')
const movieController = require('../controller/moviesController')
const validacionesMovie = require('../middleware/movieMiddleware')

//localhost:3000/movies
router.get('/', movieController.movies)
router.get('/detail', movieController.moviesDetail)

module.exports = router