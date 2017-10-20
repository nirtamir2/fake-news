const axios = require('axios')
const config = require('./../config/config')
const domains = require('./../models/domains')
module.exports = {
    whoIs(req, res) {
        const domain = req.params.domain
        axios.get('https://jsonwhoisapi.com/api/v1/whois?identifier=' + domain,
            { headers: { 'Authorization': `Basic ${config.whoIdApiAuth}` } })
            .then(response => {
                const data = response.data
                data.reliability = domains[domain]
                res.json(data)
            })
            .catch(err => {
                console.log('error', err)
                res.send(err)
            })
    }
}
