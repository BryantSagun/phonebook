import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
     const history = useHistory();
     const data = history.location.state.data;
     const [name, setName] = useState(data.name);
     const [gender, setGender] = useState(data.gender);
     const [phoneNumber, setPhoneNumber] = useState(data.phoneNumber);
     const [isPending, setIsPending] = useState(false);

     const handleSubmit = e => {
          e.preventDefault();
          const contact = {name, gender, phoneNumber}
          setIsPending(true)
          fetch('http://localhost:8000/contacts/' + data.id, {
               method: 'PUT',
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify(contact)
          })
          .then(() => {
               setIsPending(false)
               history.push('/');
          })
     }

     return(
          <div className="edit">
               <h2>Edit Contact</h2>
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
                    {!isPending && <button>Edit Contact</button>}
                    {isPending && <button disabled>Editing contact...</button>}
               </form>
          </div>
     )
}

export default Create;