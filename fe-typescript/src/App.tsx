import React, { useState } from "react";
import { useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./pages/Header";
import HeadContainer from '../src/components/HeadContainer/HeadContainer'
import Container from '../src/components/Container/Container'
import Table from '../src/components/Table/Table'
function App() {
  return (
    // <Router>
    //   <Switch>
    //     {/* <Route path="/admin" component={admin} />
    //     <Route path="/" component={client} /> */}
    //   </Switch>
    // </Router>
    <>
      <Header />
      <HeadContainer />
      <Container />
      <Table />
    </>
  );
}

export default App;