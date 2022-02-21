const db = require('./dbconfig')
db.connect().then((results) => {
     console.dir(results)
})