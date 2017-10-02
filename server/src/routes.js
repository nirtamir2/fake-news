const SearchController = require('./controllers/SearchController')
const ClaimBusterController = require('./controllers/ClaimBusterController')

module.exports = (app) => {
  app.get('/search/:keyword', SearchController.search),
  app.get('/ClaimBuster/:title', ClaimBusterController.score)
}