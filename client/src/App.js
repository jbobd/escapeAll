import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import LoginPage from "./pages/Login/Login";

const App = () => {
  return (
    <Router>
      <nav>SOY UN NAVBAR Y NO SOY DE CHAKRA</nav>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path={["/home", "/"]}>
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
