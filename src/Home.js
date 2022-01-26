import { useState, useEffect } from "react";
import ContactList from "./ContactList";

const Home = () => {
     const [contacts, setContacts] = useState([
          { name: 'Bryant Kyle Sagun', gender: 'Male', phoneNumber: '09393715837', id: 1 },
          { name: 'Gian Carlo Genisera', gender: 'Male', phoneNumber: '09393715837', id: 2 },
          { name: 'Alaica Marino', gender: 'Female', phoneNumber: '09393715837', id: 3 }
     ])
     const handleDelete = (id) => {
          const newContacts = contacts.filter((contact) => contact.id !== id);
          setContacts(newContacts)
     }
     useEffect(() => {

     }, [])
     return ( 
          <div className="home">
               <ContactList contacts={contacts} title="All Contacts" handleDelete={handleDelete} />
          </div>
      );
}
 
export default Home;