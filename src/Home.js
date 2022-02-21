import ContactList from "./ContactList";
import axios from 'axios';

const handleGetRecords = axios.get('http://localhost:3001/').then(records => {
     return records
})

const Home = () => {
     return (
          <div className="home">
               <ContactList contacts={handleGetRecords}/>
          </div>
     );
}

export default Home;