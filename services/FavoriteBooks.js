const fs =  require("fs");

const getAllFavorites = () => {
return JSON.parse(fs.readFileSync("FavoriteBooks.json"));
}

module.exports = {getAllFavorites,

};