require('dotenv').config()
const sql = require('mssql')

const config = {
     user: process.env.DB_USERNAME,
     password: process.env.DB_PASSWORD,
     database: process.env.DB_DATABASE,
     server: process.env.DB_SERVER,
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

exports.connect = async () => {
     try {
          await sql.connect(config)
     }
     catch (err) {
          console.log(err)
     }
     // return sql.query("SELECT * FROM ContactDetails")
}