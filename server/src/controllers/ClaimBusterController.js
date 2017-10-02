const axios = require('axios')
module.exports = {
    score(req, res) {
        axios.get('http://idir-server2.uta.edu:80/factchecker/score_text/'+ req.params.title)
            .then(response => {
                res.send(
                    {score: response.data.results[0].score})
            })
            .catch(err => res.send(err))
    }
}