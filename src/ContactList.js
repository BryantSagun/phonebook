import { Link } from "react-router-dom";

const ContactList = ({ contacts, title}) => {
   
     return (
       <div className="contact-list">
         <h2>{ title }</h2>
         {contacts.map(contact => (
           <div className="contact-preview" key={contact.id} >
             <Link to={`/contacts/${contact.id}`}>
                <h2>{ contact.name }</h2>
                {/* <p>Contact Number: { contact.phoneNumber }</p> */}
             </Link>
           </div>
         ))}
       </div>
     );
   }
    
export default ContactList;