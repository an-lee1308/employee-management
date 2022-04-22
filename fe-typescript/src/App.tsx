import React, { useState } from "react";
import { useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "../src/components/Header/Header";
import HeadContainer from '../src/components/HeadContainer/HeadContainer'
import Container from '../src/components/Container/Container'
import Table from '../src/components/Table/Table'
import EmployeeDetail from '../src/pages/EmployeeDetail/EmployeeDetail'
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
      <EmployeeDetail />
      {/* <Container />
      <Table /> */}
    </>
  );
}

export default App;