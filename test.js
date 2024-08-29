const fs = require('fs');
oldBooks = JSON.parse(fs.readFileSync('BooksData.json'));
newBooks = {id: 3,
title: 'The Lord of the Rings',
genre: 'Fantasy',
price: 15.99,
description: "The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling novels ever written, with over 150 million copies sold."
}

// fs.writeFileSync('BooksData.json', JSON.stringify([...oldBooks, newBooks]));

console.log(JSON.parse(fs.readFileSync('BooksData.json')))