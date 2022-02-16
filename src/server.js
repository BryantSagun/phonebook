require('dotenv').config()
const express = require('express')
const router = require('../router')
const PORT = process.env.PORT || 3001
const sql = require('mssql')
const app = express()
const path = require('path');
const fs = require('fs');
const ReactApp = require('./App')
const ReactDOMServer = require('react-dom-server')

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

app.get("/", (req, res) => {
     // result = await sql.query(`SELECT * FROM ContactDetails`)
     // res.json(result);
     const app = ReactDOMServer.renderToString(<ReactApp />);
     const indexFile = path.resolve('./build/index.html');

     fs.readFile(indexFile, 'utf8', (err, data) => {
     if (err) {
          console.error('Something went wrong:', err);
          return res.status(500).send('Oops, better luck next time!');
     }

     return res.send(
          data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
     );
     });
});

app.use('/create-contact', router)

app.post('/create-contact', router)

app.listen(PORT, () => {
     console.log(`Server listening on ${PORT}`);
});