
const express = require('express')
const router = express.Router()
const contactController = require('./controllers/contactController')

router.get('/', contactController.getContacts)
router.get('/contacts/:id', contactController.getContact)

router.post('/create-contact', contactController.createContact)

router.put('/contacts/:id', contactController.editContact)

router.delete('/contacts/:id', contactController.deleteContact)

module.exports = router