const express = require('express')

const App = express()

App.get('/', (req, res) => {
    res.end("Hello world!")
})

App.listen(5000, () => {
    console.log('Server is listening on port 5000 ...')
})