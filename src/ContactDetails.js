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
     return ( 
          <div className="contact-details">
               { isPending && <div>Loading...</div> }
               { error && <div>{error}</div>}
               { contact && (
                    <article>
                         <h2>{contact.name}</h2>
                         <p>Gender: {contact.gender}</p>
                         <p>Contact Number: {contact.phoneNumber}</p>
                         <div></div>
                         <button onClick={handleDelete}>DELETE CONTACT</button>
                    </article>
               ) }
          </div>
      );
}
 
export default ContactDetails;