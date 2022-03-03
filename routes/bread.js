const express = require('express')
const breadRouter = express.Router()

breadRouter.get('/', (req, res) => {
    res.send('BREAD TIME')
})

breadRouter.get('/:name', (req, res) => {
    res.send('we have ' + req.params.name)
})

module.exports = breadRouter