import React, { useState } from 'react';
import { useEffect } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import HeadContainer from './components/HeadContainer/HeadContainer';
import Home from './pages/Home/Home';
import EmployeeDetail from './pages/EmployeeDetail/EmployeeDetail';
import Teams from './pages/Teams/Teams';

function App() {
	return (
		<>
			<Header />
			<HeadContainer />
			<Switch>
				<Route path='/' exact={true} component={Home} />
				<Route path='/employee' exact={true} component={EmployeeDetail} />
				<Route path='/teams' exact={true} component={Teams} />
			</Switch>
		</>
	);

	/* <Header />
                  <HeadContainer />
                  <Teams />
                  <Home />

                  <EmployeeDetail />
                  <Container />
                      <Table /> */
}

export default App;
