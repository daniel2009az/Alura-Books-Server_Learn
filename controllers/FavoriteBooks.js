const {getAllFavorites} = require("../services/FavoriteBooks");

function getFavoriteBooks(req, res){
    try{
        const favorites = getAllFavorites()
        res.send(favorites)
    }   catch(error){
        res.status(400);
        res.send(error.message);    
    }
}

module.exports = {getFavoriteBooks};