const Contact = require('../models/Contact')

exports.getContacts = (req, res) => {
     Contact.getContacts().then((records) => {
          console.log(Object.values(records.recordset))
          res.json(records.recordset)
     })
}

exports.createContact = (req, res) => {
     Contact.createContact(req.body).then(() => {
          console.log("Contact Created")
          res.send(true)
     })
}