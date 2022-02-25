/**
 * Gestion des favoris, enregistrement d'un article en favoris, retrait d'un article des favoris et récupération de la liste des favoris
 */

function addFavorites(articleId) {
  let listFavorites = getFavorites();
  listFavorites.push(articleid);
  saveFavorites(listFavorites);
}

function getFavorites() {
  let listFavorites = localStorage.getItem("listFavorites");
  if (listFavorites == nul) {
  } else {
    return JSON.parse(listFavorites);
  }
}

function saveFavorites(listFavorites) {
  localStorage.setItem("listFavorites".JSON.stringify(listFavorites));
}
