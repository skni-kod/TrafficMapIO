const { Pool } = require('pg');

const pool = new Pool({
    user: 'user',
    password: 'root',
    host: 'localhost',
    port: 5432,
    database: 'rejestracja'
});

function insertQuery(login, haslo){
    return 'INSERT INTO uzytkownicy("Login", "Pass") VALUES (\'' + login + '\', \'' + haslo + '\'\);';
}

async function dbCheck(login){
    try {
        const result = await pool.query();

        if (result.rows.length > 0) {
            console.log("Login w użyciu");
        }
        else {
            console.log("Login wolny");
        }
        return result
    }
    catch (error) {
        console.error(error);
    }
}

function checkQuery(login){
    return 'SELECT 1 FROM uzytkownicy WHERE EXISTS(SELECT "Login" FROM uzytkownicy WHERE "Login" = \'' + login + '\') ORDER BY "Login" LIMIT 1;';
}

module.exports = {
    client: pool,
    checkQuery,
    insertQuery
}