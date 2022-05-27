let express = require('express')
let router = express.Router()
const uploadFile = require('../middleware/multerMovieMiddleware')
const movieController = require('../controller/moviesAPIController')
const validacionesMovie = require('../middleware/movieMiddleware')
const verificarToken = require('../middleware/authTokenMiddleware')

//localhost:3000/api/movies
router.get('/',verificarToken,  movieController.movies)
router.get('/detail/:id',verificarToken,  movieController.moviesDetail)
router.get('/search',verificarToken,  movieController.search)
router.post('/create',verificarToken, uploadFile.single('imagen'), validacionesMovie,  movieController.moviesCreate)
router.put('/update/:id',verificarToken,  uploadFile.single('imagen'),validacionesMovie,  movieController.moviesUpdate)
router.delete('/delete/:id',verificarToken,  movieController.moviesDestroy)

module.exports = router