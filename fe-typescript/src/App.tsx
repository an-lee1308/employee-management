import React, { useState } from "react";
import { useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import  Header  from "./pages/Header";

function App() {
  return (
    // <Router>
    //   <Switch>
    //     {/* <Route path="/admin" component={admin} />
    //     <Route path="/" component={client} /> */}
    //   </Switch>
    // </Router>
    <Header/>
  );
}

export default App;