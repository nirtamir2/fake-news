const SearchController = require('./controllers/SearchController')
const ClaimBusterController = require('./controllers/ClaimBusterController')
const WhoIsController = require('./controllers/WhoIsController')

module.exports = (app) => {
  app.get('/search/:keyword', SearchController.search),
  app.get('/ClaimBuster/:title', ClaimBusterController.score),
  app.get('/search-domain/:domain', WhoIsController.whoIs)
}