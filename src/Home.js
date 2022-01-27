import { useState, useEffect } from "react";
import ContactList from "./ContactList";
import useFetch from "./useFetch";

const Home = () => {
     const {data: contacts, isPending, error} = useFetch('http://localhost:8000/contacts')
     return ( 
          <div className="home">
               {error && <div>{error}</div>}
               {isPending && <div>Loading</div>}
               {contacts && <ContactList contacts={contacts} title="All Contacts"/>}
          </div>
      );
}
 
export default Home;