const Contact = require('../models/Contact')

exports.getContacts = (req, res) => {
     Contact.getContacts().then((records) => {
          res.json(records.recordset)
     })
}

exports.getContact = (req, res) => {
     Contact.getContact(req.params.id).then((record) => {
          res.json(record.recordset)
     })
}

exports.createContact = (req, res) => {
     Contact.createContact(req.body).then(() => {
          res.send(true)
     })
}

exports.editContact = (req, res) => {
     Contact.editContact(req.params.id, req.body).then(() => {
          res.send(true)
     })
}

exports.deleteContact = (req, res) => {
     Contact.deleteContact(req.params.id).then(() => {
          res.json(true)
     })
}