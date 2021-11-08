import React, { Components } from "react";
import InitStyles from "./Components/InitStyles";
import Router from "./Router";

class App extends React.Component {
  render() {
    return (
      <>
        <Router />
        <InitStyles />
      </>
    );
  }
}

export default App;
