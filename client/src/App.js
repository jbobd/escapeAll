import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

import Landing from "./pages/Landing/Landing";


const App = () => {
  return (
    <ThemeProvider>
      <CSSReset />
      <Landing />
    </ThemeProvider>
  );
}

export default App;
