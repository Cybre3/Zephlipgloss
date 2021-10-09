// import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js";
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FOG from "vanta/dist/vanta.fog.min";

import SaleBanner from './Components/SaleBanner';
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Shop from './Components/Shop';
import ProductPage from "./Components/ProductPage";
import ShoppingCart from './Components/ShoppingCart';
import PrivacyPolicy from "./Components/SubComponents/PrivacyPolicy";
import TermsAndConditions from "./Components/SubComponents/TermsConditions";
import Footer from "./Components/Footer";
import About from './Components/SubComponents/About';
import RegistrationForm from './Components/RegistrationForm';
import LoginForm from './Components/LoginForm';

const App = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0xfce3b8,
          midtoneColor: 0xf5a4bf,
          lowlightColor: 0xff2828,
          baseColor: 0xffffff,
          blurFactor: 0.13,
          speed: 0.07,
          zoom: 0.4,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <Router>
      <div ref={myRef}>
        <SaleBanner />
        <NavBar image="https://img1.wsimg.com/isteam/ip/98d8e522-d343-47fd-9248-a2483aa95966/new%20logo.jpg/:/rs=h:168,cg:true,m/qt=q:100/ll" />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="/register">
              <RegistrationForm />
            </Route>
            <Route path="/login">
              <LoginForm />
            </Route>
            <Route path="/product/:id">
              <ProductPage />
            </Route>
            <Route path="/shopping-cart">
              <ShoppingCart />
            </Route>
            <Route path="/privacy-policy">
              <PrivacyPolicy />
            </Route>
            <Route path="/terms-and-conditions">
              <TermsAndConditions />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;