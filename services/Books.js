const fs = require("fs"); // Importando o módulo fs (File System) para lidar com arquivos

function getAllBooks() {
  return JSON.parse(fs.readFileSync("BooksData.json")); // Lendo o arquivo BooksData.json e convertendo para um objeto JavaScript
}

function getBookById(id) {
    const books = JSON.parse(fs.readFileSync("BooksData.json")); // Lendo o arquivo BooksData.json e convertendo para um objeto JavaScript
    const book =  books.find((book) => book.id === Number(id)); // Retornando o livro que possui o id igual ao id passado como parâmetro
    // console.log(book); 
    return book;
}

function postNewBook(newBook) {
  const oldBooks = JSON.parse(fs.readFileSync("BooksData.json")); 
//   console.log(newBook); 
  fs.writeFileSync("BooksData.json", JSON.stringify([...oldBooks, newBook])); // Adicionando um novo livro ao arquivo BooksData.json
}

function changeBook(id, changes) {
  /*const Book = oldBooks.filter((book) => book.id === Number(id))[0];
  const index = oldBooks.indexOf(Book);
  const newBook = {...Book, ...changes};
  oldBooks[index] = newBook;*/     //solução pessoal
  
    let oldBooks = JSON.parse(fs.readFileSync("BooksData.json"))
    const index = oldBooks.findIndex( function(book){
        return book.id === Number(id);
    })
    oldBooks[index] = {...oldBooks[index], ...changes};
    fs.writeFileSync("BooksData.json", JSON.stringify(oldBooks));


}    

function deleteBookId(id){
    let oldBooks = JSON.parse(fs.readFileSync("BooksData.json"));
    const newBooks = oldBooks.filter((book) => book.id !== Number(id));
    oldBooks = newBooks; 
    fs.writeFileSync("BooksData.json", JSON.stringify(oldBooks));
}

module.exports = { getAllBooks, getBookById, postNewBook, changeBook, deleteBookId }; // Exportando a função getAllBooks para ser utilizada em outros arquivos