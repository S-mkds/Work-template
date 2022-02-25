/**
 * Représentation du format d'un article ainsi que le formatage des dates pour affichage
 */

class Article {
  constructor(jsonArticle) {
    jsonArticle && Object.assign(this, jsonArticle);
  }

  getFormatedData(article) {
    let timestamp = Date.parse(this.publicationDate);
    let date = new Date(timestamp);
    return date.toLocaleDateString();
  }
}
