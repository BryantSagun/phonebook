const sql = require('mssql')

let Contact = function(){

}

Contact.getContacts = () => {
     return sql.query(`usp_ReadRecords`)
}

Contact.getContact = id => {
     return sql.query(`usp_ReadSingleRecord ${id}`)
}

Contact.createContact = data => {
     return sql.query(`usp_CreateSingleRecord ${data.lastName}, ${data.firstName}, ${data.middleName}, ${data.Gender}, ${data.phoneNumber}`)
}

Contact.editContact = (id, data) => {
     return sql.query(`usp_UpdateSingleRecord ${data.lastName}, ${data.firstName}, ${data.middleName}, ${data.gender}, ${data.phoneNumber}, ${id}`)
}

Contact.deleteContact = id => {
     return sql.query(`usp_DeleteRecords ${id}`)
}

module.exports = Contact