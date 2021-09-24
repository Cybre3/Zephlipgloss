import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from "./NavBar";
import Home from './Home';
import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from "./TermsConditions";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/privacy-policy">
              <PrivacyPolicy />
            </Route>
            <Route exact path="/terms-and-conditions">
              <TermsAndConditions />
            </Route>
          </Switch>
        </div> 
      <Footer />
      </div>
    </Router>
  );
}

export default App;
