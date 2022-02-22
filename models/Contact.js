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
     return sql.query(`usp_CreateSingleRecord @LastName = ${data.lastName}, @FirstName = ${data.firstName}, @MiddleName = ${data.middleName}, @Gender = ${data.gender}, @PhoneNumber = ${data.phoneNumber}`)
}

Contact.editContact = (id, data) => {
     console.log(data)
     return sql.query(`usp_UpdateSingleRecord @LastName = ${data.lastName}, @FirstName = ${data.firstName}, @MiddleName = ${data.middleName}, @Gender = ${data.gender}, @PhoneNumber = ${data.phoneNumber} @ID = ${id}`)
}

Contact.deleteContact = id => {
     return sql.query(`usp_DeleteRecords ${id}`)
}

module.exports = Contact