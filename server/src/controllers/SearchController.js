const googleTrends = require('google-trends-api');

module.exports = {
  search(req, res) {
    googleTrends.interestOverTime({ keyword: req.params.keyword })
      .then(function (results) {
        res.send(results)
      })
      .catch(function (err) {
        console.error('Oh no there was an error', err);
      });
  }
}