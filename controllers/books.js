const { getAllBooks } = require("../services/Books"); // Importando o conteúdo do arquivo BooksData.json
const { getBookById } = require("../services/Books"); // Importando o conteúdo do arquivo BooksData.json
const { postNewBook } = require("../services/Books"); // Importando o conteúdo do arquivo BooksData.json
const { changeBook } = require("../services/Books"); // Importando o conteúdo do arquivo BooksData.json
const { deleteBookId } = require("../services/Books"); // Importando o conteúdo do arquivo BooksData.json

function getBooks(req, res) {
  try {
    const books = getAllBooks(); // Lendo o arquivo BooksData.json e convertendo para um objeto JavaScript
    res.send(
      books
    )
    ; /*nviando a resposta com o conteúdo do arquivo BooksData.json */
  } catch (error) {
    res.status(400);
    res.send(error.message);
  }
}

function getBook(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      const books = getBookById(id);
      res.send(books);
    } else {
        res.status(422);
        res.send("Invalid id");
    }
  } catch (error) {
    res.status(400);
    res.send(error.message);
  }
}

function postBook(req, res) {
  try {
    const newBook = req.body;
    if(Object.keys(newBook).length !== 5 || !newBook.id || !newBook.title || !newBook.genre || !newBook.price || !newBook.description) {
        
        res.status(422);
        res.send(`You must provide all the fields {id, title, genre, price, description};
             Still missing fields`)
    } else {  
    postNewBook(newBook);
    res.status(201);
    res.send("Sucessfuly added book");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function pathBook(req, res) {
  try {
      const id = req.params.id;
      const changes = req.body;
    if(!(id && Number(id)) || !(Object.keys(changes).length !== 0)){
        res.send("Invalid id or no fields changed");

    }else if(!getBookById(id)){
        res.status(422);
        res.send("Book not found");
    }
    else{
    changeBook(id, changes);
    res.status(202);
    res.send("Sucessfuly edited book");
    }
  } catch {
    res.status(500);
    res.send(error.message)
      }
}

function deleteBook(req, res) {
  try {
    const id = req.params.id;
    if(id && Number(id)){
    deleteBookId(id);
    res.status(202);
    res.send("Sucessfuly deleted book")
    }else{
        res.status(422);
        res.send('Invalid Id')
    }
  } catch {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = { getBooks, getBook, postBook, pathBook, deleteBook }; // Exportando a função getBooks para ser utilizada em outros arquivos
