const express = require('express'); // Importando o express
const books = require('./routes/book'); // Importando o arquivo book.js


const app = express(); // Inicializando o express
app.use(express.json()); // Habilitando o uso de JSON

const port = 8000; // Definindo a porta

app.use('/books', books)// Definindo a rota /books


app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);

})