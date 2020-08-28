import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import LoginPage from "./pages/Login/Login";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
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
