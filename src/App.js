import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import ContactDetails from './ContactDetails';
import NotFound from './NotFound';
import Edit from './Edit';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  return (
    <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route exact path="/contacts/:id">
                <ContactDetails />
              </Route>
              <Route exact path="/contacts/edit/:id">
                <Edit />
              </Route>
              <Route path = "*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
    </Router>
  );
}

export default App;