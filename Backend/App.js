const express = require('express')

// Routers
const loginRoute = require('./Routes/LoginRoute')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/login', loginRoute)

app.listen(5000, () => {
    console.log('Server is listening on port 5000 ...')
})