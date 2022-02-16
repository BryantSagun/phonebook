const sql = require('mssql')

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