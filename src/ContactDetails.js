import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from './useFetch';
import axios from "axios";

const ContactDetails = () => {
     const{ id } = useParams();
     const { data: contact, isPending, error } = useFetch(`http://localhost:3001/contacts/${id}`)
     const history = useHistory();
     const handleDelete = e => {
          axios.delete(`http://localhost:3001/contacts/${id}`)
          .then(() => {
               history.push('/')
          })
     }
     const handleEdit = e => {
          history.push(`/contacts/edit/${id}`, {data: contact})
     }
     return (
          <div className="contact-details">
               { isPending && <div>Loading...</div> }
               { error && <div>{error}</div>}
               { contact && contact.length > 0 && contact.map(record =>
                         <article>
                              <h2> {record.FirstName} {record.MiddleName} {record.LastName}</h2>
                              <p>Gender: {record.Gender}</p>
                              <p>Contact Number: {record.PhoneNumber}</p>
                              <button className="contact-details-edit" onClick={handleEdit}>EDIT CONTACT</button>
                              <button className="contact-details-delete" onClick={handleDelete}>DELETE CONTACT</button>
                         </article>
                    )
               }
          </div>
      );
}
 
export default ContactDetails;