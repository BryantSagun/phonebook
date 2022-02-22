import ContactList from "./ContactList";
import useFetch from "./useFetch"
import axios from 'axios';


const Home = () => {
     const {data: contacts, isPending, error} = useFetch('http://localhost:3001/')
     return (
          <div className="home">
               {error && <div>{error}</div>}
               {isPending && <div>Loading</div>}
               {contacts && <ContactList contacts={contacts} title="All Contacts"/>}
          </div>
      );
}

export default Home;