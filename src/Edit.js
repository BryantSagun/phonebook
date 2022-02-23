import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const Create = () => {
     const {id} = useParams()
     const history = useHistory()
     const contact = history.location.state.data
     const [firstName, setFirstName] = useState(contact[0].FirstName);
     const [middleName, setMiddleName] = useState(contact[0].MiddleName);
     const [lastName, setLastName] = useState(contact[0].LastName);
     const [gender, setGender] = useState(contact[0].Gender);
     const [phoneNumber, setPhoneNumber] = useState(contact[0].PhoneNumber);
     const [isPending, setIsPending] = useState(false);

     const handleSubmit = e => {
          e.preventDefault();
          const contact = {firstName, middleName, lastName, gender, phoneNumber}
          setIsPending(true)
          axios.put(`http://localhost:3001/contacts/${id}`, {
               firstName: contact.firstName,
               middleName: contact.middleName,
               lastName: contact.lastName,
               gender: contact.gender,
               phoneNumber: contact.phoneNumber
          })
          .then(() => {
               setIsPending(false)
               history.push('/');
          })
          .catch(err => {console.log(err)})
     }

     return(
          <div className="edit">
               <h2>Edit Contact</h2>
               {contact && <form onSubmit={handleSubmit}>
                    <label>Contact Name: </label>
                    <input
                         type="text"
                         placeholder = "First Name"
                         required
                         value={firstName}
                         onChange = {(e) => setFirstName(e.target.value)}
                    />
                    <input
                         type="text"
                         placeholder = "Middle Name"
                         required
                         value={middleName}
                         onChange = {(e) => setMiddleName(e.target.value)}
                    />
                    <input
                         type="text"
                         placeholder = "Last Name"
                         required
                         value={lastName}
                         onChange = {(e) => setLastName(e.target.value)}
                    />
                    <label>Gender: </label>
                    <select
                         value={gender}
                         onChange = {(e) => setGender(e.target.value)}
                    >
                         <option value="Male">Male</option>
                         <option value="Female">Female</option>
                    </select>
                    <label>Contact Number: </label>
                    <input
                         type="text"
                         required
                         value={phoneNumber}
                         onChange = {(e) => setPhoneNumber(e.target.value)}
                    />
                    {!isPending && <button>Edit Contact</button>}
                    {isPending && <button disabled>Editing contact...</button>}
               </form>}
          </div>
     )
}

export default Create;