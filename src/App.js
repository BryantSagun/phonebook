import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ContactDetails from './ContactDetails';

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
            </Switch>
          </div>
        </div>
    </Router>
  );
}

export default App;