import { Link } from "react-router-dom";

const ContactList = ( contacts ) => {
   
     return (
       <div className="contact-list">
         <h2>Contacts</h2>
         {Object.values(contacts).map(contact => (
           <div className="contact-preview" key={toString(contact.ID)} >
             <Link to={`/contacts/${contact.ID}`}>
                <h2>{contact.LastName}</h2>
             </Link>
           </div>
         ))}
       </div>
     );
   }
    
export default ContactList;