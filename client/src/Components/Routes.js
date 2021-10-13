import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

<Switch>
<Route exact path="/">
  <Home />
</Route>
<Route path="/shop">
  <Shop />
</Route>
<Route path="/sale">
  <Sale />
</Route>
<Route path="/register">
  <RegistrationForm />
</Route>
<Route path="/login" component={<LoginForm />} auth={authApi.auth} render={(props) => !auth ? {LoginForm} : <Redirect to="/terms-and-conditions" />} />
{/* <Route>
  <LoginForm />
</Route> */}
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
<Route path="*">
  <PageNotFound />
</Route>
</Switch>