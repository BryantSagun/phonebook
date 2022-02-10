require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 3001
const sql = require('mssql')
const app = express()
const path = require('path');

const config = {
     user:   process.env.USERNAME,
     password: process.env.PASSWORD,
     database: process.env.DATABASE,
     server: process.env.SERVER,
     pool: {
          max: 10,
          min: 0,
          idleTimeoutMillis: 30000
     },
     options: {
          encrypt: true,
          trustServerCertificate: true
     }
}

var result = ''
const connect = async () => {
     try {
          await sql.connect(config)
          //console.dir(result)
     }
     catch (err) {
          console.log(err)
     }
}

connect();

app.use(express.static(path.resolve(__dirname, '../src')));

app.get("/", async (req, res) => {
     result = await sql.query(`SELECT * FROM ContactDetails`)
     res.json(result);
});

app.listen(PORT, () => {
     console.log(`Server listening on ${PORT}`);
});