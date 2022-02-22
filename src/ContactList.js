import { Link } from "react-router-dom";

const ContactList = ({ contacts, title }) => {
   
     return (
       <div className="contact-list">
         <h2>{title}</h2>
         {contacts.map(contact => (
           <div className="contact-preview" key={contact.ID} >
             <Link to={`/contacts/${contact.ID}`}>
                <h2>{contact.FirstName} {contact.LastName}</h2>
             </Link>
          </div>
         ))}
       </div>
     );
   }
    
export default ContactList;