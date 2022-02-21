import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Create = () => {
     const [firstName, setFirstName] = useState('');
     const [middleName, setMiddleName] = useState('');
     const [lastName, setLastName] = useState('');
     const [gender, setGender] = useState('Male');
     const [phoneNumber, setPhoneNumber] = useState('');
     const [isPending, setIsPending] = useState(false);
     const history = useHistory();

     const handleSubmit = e => {
          e.preventDefault();
          const contact = {firstName, middleName, lastName, gender, phoneNumber}
          setIsPending(true)
          axios.post('http://localhost:3001/create-contact', {
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
          .catch(err => {console.log("error")})
     }

     return(
          <div className="create">
               <h2>Add a New Contact</h2>
               <form onSubmit={handleSubmit}>
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
                    {!isPending && <button>Add Contact</button>}
                    {isPending && <button disabled>Adding contact...</button>}
               </form>
          </div>
     )
}

export default Create;