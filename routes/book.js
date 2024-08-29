const {Router} = require('express'); // Importando o Router do express
const { getBooks, getBook, postBook, pathBook, deleteBook } = require('../controllers/books.js');


const router = Router(); // Inicializando o router do express

router.get('/', getBooks );

router.get('/:id', getBook);

router.post('/', postBook );


router.patch('/:id', pathBook )

router.delete('/:id', deleteBook)


module.exports = router; // Exportando o router para ser utilizado em outros arquivos