// import React, { useState } from 'react';
// import { useEffect } from 'react';
import {
	Switch,
	Route,
	// BrowserRouter as Router,
	useLocation,
} from 'react-router-dom';
import Header from './components/Header/Header';
import HeadContainer from './components/HeadContainer/HeadContainer';
import Home from './pages/Home/Home';
import EmployeeDetail from './pages/EmployeeDetail/EmployeeDetail';
import Teams from './pages/Teams/Teams';
import Background from './pages/Background/BackGround';

function App() {
	// console.log(
	// 	'param',
	// 	useLocation().pathname.slice(0, useLocation().pathname.lastIndexOf('/'))
	// );
	const location = useLocation().pathname;
	console.log(location);

	return (
		<>
			<Header />
			{location === '/employee' ? <HeadContainer /> : ''}
			<Switch>
				<Route path='/' exact={true} component={Background} />
				<Route path='/employee' exact={true} component={Home} />
				<Route path='/employee/:id' exact={true} component={EmployeeDetail} />
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
