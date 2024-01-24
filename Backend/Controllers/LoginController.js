const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "root",
    port: 5432,
    password: "root",
    database: "trafficmapdb"
})

client.connect()

const login = async (req, res, next) => {
    const query = `SELECT username, email from users WHERE username = '${req.body.username}' AND password = '${req.body.password}'`
    const db_res = await client.query(query)
    if (db_res.rows) {
        res.json({user: db_res.rows[0]})
    }
    else {
        res.json({user: []})
    }
    next()
}

module.exports = login