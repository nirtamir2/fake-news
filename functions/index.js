const functions = require('firebase-functions');

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

const api = functions.https.onRequest(app);

module.exports = {api}
