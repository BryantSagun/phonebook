const express = require('express')
const router = require('./router')
const PORT = process.env.PORT || 3001
const app = express()
const path = require('path');
const db = require('./dbconfig')
const bodyParser = require('body-parser');
const cors = require("cors");

app.use(express.urlencoded({extended: false}))
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../src')));

app.use('/', router)

db.connect().then(() => {
     app.listen(PORT, () => {
          console.log(`Server listening on ${PORT}`);
     });
})