require('dotenv').config()

const sql = require('mssql')
const sqlConfig = {
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

const con = async () => {
     try {
          await sql.connect(sqlConfig)
          const result = await sql.query`EXEC usp_ReadSmartNetworkNumbers`
          console.dir(result)
     }
     catch (err) {
          console.log(err)
     }
}

con()