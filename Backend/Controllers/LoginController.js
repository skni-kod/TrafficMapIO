const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "root",
    port: 5432,
    password: "root",
    database: "trafficmapdb"
})

client.connect()



const login = (req, res, next) => {
    res.send("This is a login controller")

    client.query(`SELECT * from users`, (err, client_res) => {
        if(!err){
            console.log(client_res.rows)
            res.json(client_res)
        }
        else{
            console.log(error)

        }
    })

    
    res.end()
    next()
}


module.exports = login