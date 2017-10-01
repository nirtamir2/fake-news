const SearchController = require('./controllers/SearchController')
module.exports = (app) => {
  app.get('/search/:keyword', SearchController.search)
}