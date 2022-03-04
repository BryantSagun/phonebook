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
     return new Promise((resolve, reject) => {
          data.records.map(record => {
               sql.query(`usp_CreateSingleRecord '${record.lastName}', '${record.firstName}', '${record.middleName}', '${record.gender}', '${record.phoneNumber}'`)
          })
          resolve()
     })
}

Contact.editContact = (id, data) => {
     return sql.query(`usp_UpdateSingleRecord '${data.lastName}', '${data.firstName}', '${data.middleName}', '${data.gender}', '${data.phoneNumber}', ${id}`)
}

Contact.deleteContact = id => {
     return sql.query(`usp_DeleteRecords ${id}`)
}

module.exports = Contact