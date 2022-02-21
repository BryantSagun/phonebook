const sql = require('mssql')

let Contact = function(){

}

Contact.getContacts = () => {
     return sql.query(`usp_ReadRecords`)
}

Contact.createContact = (data) => {
     sql.query(`usp_CreateSingleRecord @LastName = ${data.lastName}, @FirstName = ${data.firstName}, @MiddleName = ${data.middleName}, @Gender = ${data.gender}, @PhoneNumber = ${data.phoneNumber}`)
}

module.exports = Contact