import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from "./Components/NavBar";
import Home from './Components/Home';
import Product from "./Components/Product";
import PrivacyPolicy from './Components/PrivacyPolicy';
import TermsAndConditions from "./Components/TermsConditions";
import Footer from './Components/Footer'

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
            <Route exact path="/product-details">
              <Product />
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
