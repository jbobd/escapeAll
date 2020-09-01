import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import LoginPage from "./pages/Login/Login";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path={["/home", "/"]}>
            <Landing />
          </Route>
        </Layout>
      </Switch>
    </Router>
  );
};

export default App;
