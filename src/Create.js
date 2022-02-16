import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Create = () => {
     const [name, setName] = useState('');
     const [gender, setGender] = useState('Male');
     const [phoneNumber, setPhoneNumber] = useState('');
     const [isPending, setIsPending] = useState(false);
     const history = useHistory();

     const handleSubmit = e => {
          e.preventDefault();
          const contact = {name, gender, phoneNumber}
          setIsPending(true)
          // fetch('http://localhost:8000/contacts', {
          //      method: 'POST',
          //      headers: { "Content-Type": "application/json" },
          //      body: JSON.stringify(contact)
          // })
          // .then(() => {
          //      setIsPending(false)
          //      history.push('/');
          // })
          axios.post('http://localhost:8000/contacts', {
               name: contact.name,
               gender: contact.gender,
               phoneNumber: contact.phoneNumber
          })
          .then(() => {
               setIsPending(false)
               history.push('/');
          })
          axios.post('http://localhost:3000/create-contact', {
               name: contact.name,
               gender: contact.gender,
               phoneNumber: contact.phoneNumber
          })
     }

     return(
          <div className="create">
               <h2>Add a New Contact</h2>
               <form onSubmit={handleSubmit}>
                    <label>Contact Name: </label>
                    <input
                         type="text"
                         required
                         value={name}
                         onChange = {(e) => setName(e.target.value)}
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