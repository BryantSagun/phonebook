require('dotenv').config()
const express = require('express')
const router = require('./router')
const PORT = process.env.PORT || 3001
const app = express()
const path = require('path');

app.use(express.static(path.resolve(__dirname, '../src')));

app.use('/', router)

app.listen(PORT, () => {
     console.log(`Server listening on ${PORT}`);
});