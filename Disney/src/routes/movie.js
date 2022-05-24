let express = require('express')
let router = express.Router()
const uploadFile = require('../middleware/multerMovieMiddleware')
const movieController = require('../controller/moviesController')
const validacionesMovie = require('../middleware/movieMiddleware')

//localhost:3000/movies
router.get('/', movieController.movies)
router.get('/detail', movieController.moviesDetail)
router.post('/create',uploadFile.single('imagen'), validacionesMovie,  movieController.moviesCreate)
router.put('/update/:id', uploadFile.single('imagen'),validacionesMovie,  movieController.moviesUpdate)
router.delete('/delete/:id', movieController.moviesDestroy)

module.exports = router