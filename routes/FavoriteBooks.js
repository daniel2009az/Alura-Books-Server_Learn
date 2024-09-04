const {Router} = require('express');
const{getFavoriteBooks} = require('../controllers/FavoriteBooks');

const router = Router(); // Inicializando o router do express

router.get('/', getFavoriteBooks);


module.exports = router;