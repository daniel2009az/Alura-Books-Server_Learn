const express = require('express'); // Importando o express responsavel por criar o servidor
const books = require('./routes/book'); // Importando o arquivo book.js
const  cors = require('cors'); // Importando o cors responsavel por permitir a comunicação entre o front e o back
const path = require('path'); // Importando o path responsavel por lidar com caminhos de arquivos
const app = express(); // Inicializando o express 
const favorite = require('./routes/FavoriteBooks'); // Importando o arquivo FavoriteBooks.js


app.use(express.json()); // Habilitando o uso de JSON
app.use(cors({origin: 'http://localhost:3000'})); // Habilitando o uso do cors

const port = 8000; // Definindo a porta
app.use('/imagens', express.static(path.join(__dirname, 'public/imagens'))); // Definindo a rota /imagens
app.use('/books', books)// Definindo a rota /books
app.use('/favorite', favorite); // Definindo a rota /favorite

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);

})