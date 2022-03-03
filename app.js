const express = require('express')
const app = express()
const breadRouter = require('./routes/bread')

app.get('/', (req,res) => {
    res.send('Hello')
})

app.use('/bread', breadRouter)

app.all('*', (req,res) => {
    res.send('Nothing to get at ' + req.url)
})

app.listen(3022, () => {
    console.log('listening on 3022')
})