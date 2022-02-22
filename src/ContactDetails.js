import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from './useFetch';
import axios from "axios";

const ContactDetails = () => {
     const{ id } = useParams();
     const { data: contact, error, isPending } = useFetch('http://localhost:3001/contacts/' + id)
     const history = useHistory();
     const handleDelete = e => {
          axios.delete('http://localhost:3001/contacts/' + id)
          .then(() => {
               history.push('/')
          })
     }
     const handleEdit = e => {
          axios.get('http://localhost:3001/contacts/' + id)
          .then(() => {
               history.push(`/contacts/edit/${contact.ID}`, {data: contact})
          })
     }
     return (
          <div className="contact-details">
               { isPending && <div>Loading...</div> }
               { error && <div>{error}</div>}
               { contact && (
                    <article>
                         <h2>{contact.FirstName}</h2>
                         <p>Gender: {contact.Gender}</p>
                         <p>Contact Number: {contact.PhoneNumber}</p>
                         <button className="contact-details-edit" onClick={handleEdit}>EDIT CONTACT</button>
                         <button className="contact-details-delete" onClick={handleDelete}>DELETE CONTACT</button>
                    </article>
               ) }
          </div>
      );
}
 
export default ContactDetails;