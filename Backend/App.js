const express = require('express')

// Routers
const UsersRouter = require('./Routes/UserRouter')

const App = express()

App.use('/user', UsersRouter)

App.get('/', (req, res) => {
    res.end("Hello world!")
})

App.get('/user', (req, res, next) => {
    res.end()
})

App.listen(5000, () => {
    console.log('Server is listening on port 5000 ...')
})