import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ContactDetails from './ContactDetails';
import NotFound from './NotFound';
import Edit from './Edit';

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
              <Route path="/contacts/:id">
                <ContactDetails />
              </Route>
              <Route path="/edit/:id">
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