import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from './useFetch';

const ContactDetails = () => {
     const{ id } = useParams();
     const { data: contact, error, isPending } = useFetch('http://localhost:8000/contacts/' + id)
     const history = useHistory();
     const handleDelete = e => {
          fetch('http://localhost:8000/contacts/' + contact.id, {
               method: 'DELETE'
          })
          .then(() => {
               history.push('/')
          })
     }
     const handleEdit = e => {
          fetch('http://localhost:8000/contacts/' + contact.id, {
               method: 'GET'
          })
          .then(() => {
               history.push(`/contacts/edit/${contact.id}`, {data: contact})
          })
     }
     return ( 
          <div className="contact-details">
               { isPending && <div>Loading...</div> }
               { error && <div>{error}</div>}
               { contact && (
                    <article>
                         <h2>{contact.name}</h2>
                         <p>Gender: {contact.gender}</p>
                         <p>Contact Number: {contact.phoneNumber}</p>
                         <button className="contact-details-edit" onClick={handleEdit}>EDIT CONTACT</button>
                         <button className="contact-details-delete" onClick={handleDelete}>DELETE CONTACT</button>
                    </article>
               ) }
          </div>
      );
}
 
export default ContactDetails;