import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import ContactForm from "./ContactForm";
import Conformation from "./Conformation";

const Routes = () => {
  return (
    <Switch>
      <Route path="/form">
        <ContactForm />
      </Route>
      <Route path="/conformation/:name">
        <Conformation />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
