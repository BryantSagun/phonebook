import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Create = () => {
     const [inputList, setInputList] = useState([{firstName: "", middleName:"", lastName: "", gender: "", phoneNumber: ""}])
     const [firstName, setFirstName] = useState('');
     const [middleName, setMiddleName] = useState('');
     const [lastName, setLastName] = useState('');
     const [gender, setGender] = useState('Male');
     const [phoneNumber, setPhoneNumber] = useState('');
     const [isPending, setIsPending] = useState(false);
     const history = useHistory();

     const handleSubmit = e => {
          console.log(inputList)
          e.preventDefault();
          setIsPending(true)
          axios.post('http://localhost:3001/create-contact', {
               records: inputList
          })
          .then((bool) => {
               setIsPending(false)
               history.push('/');
          })
          .catch(err => {console.log("error")})
     }

     const handleAddForm = (e, index) => {
          setInputList([...inputList, { firstName: "", middleName: "", lastName: "", gender: "", phoneNumber: "" }]);
     }

     const handleRemoveForm = index => {
          const list = [...inputList];
          list.splice(index, 1);
          setInputList(list);
     };

     const handleInputChange = (e, index) => {
          const { name, value } = e.target;
          const list = [...inputList];
          list[index][name] = value;
          setInputList(list);
     };

     return(
          <div className="create">
               <h2>Add New Contact</h2>
               <form onSubmit={handleSubmit}>
                    {inputList.map((form, formIndex) => {
                         return(
                              <div className="contactForm">
                                   {inputList.length > 1 &&  <h5>Contact Form {formIndex+1}</h5>}
                                   <label>Contact Name: </label>
                                   <input
                                        name="firstName"
                                        type="text"
                                        placeholder = "First Name"
                                        required
                                        autoComplete = "off"
                                        value={form.firstName}
                                        onChange = {e => handleInputChange(e, formIndex)}
                                   />
                                   <input
                                        name="middleName"
                                        type="text"
                                        placeholder = "Middle Name"
                                        required
                                        autoComplete = "off"
                                        value={form.middleName}
                                        onChange = {e => handleInputChange(e, formIndex)}
                                   />
                                   <input
                                        name="lastName"
                                        type="text"
                                        placeholder = "Last Name"
                                        required
                                        autoComplete = "off"
                                        value={form.lastName}
                                        onChange = {e => handleInputChange(e, formIndex)}
                                   />
                                   <label>Gender: </label>
                                   <select
                                        name="gender"
                                        value={form.gender}
                                        onChange = {e => handleInputChange(e, formIndex)}
                                   >
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                   </select>
                                   <label>Contact Number: </label>
                                   <input
                                        name="phoneNumber"
                                        type="text"
                                        required
                                        autoComplete = "off"
                                        value={form.phoneNumber}
                                        placeholder = "Contact Number"
                                        onChange = {e => handleInputChange(e, formIndex)}
                                   />
                                   {!isPending && inputList.length-1 === formIndex && inputList.length === 1 && <button>Save Contact</button>}
                                   {!isPending && inputList.length-1 === formIndex && inputList.length > 1 && <button>Save All Contacts</button>}
                                   {isPending && <button disabled>Saving Contact...</button>}
                                   {inputList.length > 1 && <button onClick={handleRemoveForm}>Delete Contact Form {formIndex+1}</button>}
                              </div>
                         )
                    })}
               </form>
               <button onClick={handleAddForm}>Create New Contact Form</button>
          </div>
     )
}

export default Create;