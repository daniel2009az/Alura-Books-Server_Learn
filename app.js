const express = require('express'); // Importando o express responsavel por criar o servidor
const books = require('./routes/book'); // Importando o arquivo book.js
const  cors = require('cors'); // Importando o cors

const app = express(); // Inicializando o express
app.use(express.json()); // Habilitando o uso de JSON
app.use(cors({origin: 'http://localhost:3000'})); // Habilitando o uso do cors
const port = 8000; // Definindo a porta

app.use('/books', books)// Definindo a rota /books


app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);

})