import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

/* pages */
import Landing from "./pages/landing/Landing";
import LoginPage from "./pages/Login/Login";


const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <nav>SOY UN NAVBAR Y NO SOY DE CHAKRA</nav>
      <CSSReset />
      <Switch>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='/home'>
          <Landing /> 
        </Route>
      </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
