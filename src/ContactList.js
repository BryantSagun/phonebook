const ContactList = ({ contacts, title, handleDelete}) => {
   
     return (
       <div className="blog-list">
         <h2>{ title }</h2>
         {contacts.map(contact => (
           <div className="blog-preview" key={contact.id} >
             <h2>{ contact.name }</h2>
             <p>Gender: { contact.gender }</p>
             <p>Contact Number: { contact.phoneNumber }</p>
             <button onClick={() => handleDelete(contact.id)}>Delete Contact</button>
           </div>
         ))}
       </div>
     );
   }
    
export default ContactList;