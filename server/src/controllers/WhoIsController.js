const axios = require('axios')
const config = require('./../config/config')
module.exports = {
    whoIs(req, res) {
        axios.get('https://jsonwhoisapi.com/api/v1/whois?identifier=' + req.params.domain,
            { headers: { 'Authorization': `Basic ${config.whoIdApiAuth}` } })
            .then(response => {
                res.json(response.data)
            })
            .catch(err => {
                console.log('error', err)
                res.send(err)
            })
    }
}
