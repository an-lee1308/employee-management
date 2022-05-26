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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import ErrorPage from './components/ErrorPage';

function App() {
	// console.log(
	// 	'param',
	// 	useLocation().pathname.slice(0, useLocation().pathname.lastIndexOf('/'))
	// );
	const location = useLocation().pathname;
	console.log(location);
	const [render, setRender] = useState(false);
	function renderPage() {
		setRender(!render);
	}

	return (
		<>
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<Header />
			{/* {location === '/employee' ? (
				<HeadContainer renderPage={renderPage} />
			) : (
				''
			)} */}
			<Switch>
				<Route path='/' exact={true} component={Background} />
				{/* <Route path='/employee' exact={true} component={Home} /> */}
				<Route path='/employee' exact={true}>
					<Home render={render} renderPage={renderPage} />
				</Route>
				{/* <Route path='/employee/:id' exact={true} component={EmployeeDetail} /> */}

				<Route path='/employee/:id' exact={true}>
					<EmployeeDetail render={render} renderPage={renderPage} />
				</Route>

				<Route path='/teams' exact={true}>
					<Teams render={render} renderPage={renderPage} />
				</Route>

				<Route path='/teams/:id' exact={true}>
					<Teams render={render} renderPage={renderPage} />
				</Route>

				{/* <Route path='/teams' exact={true} component={Teams} />
				<Route path='/teams/:id' exact={true} component={Teams} /> */}
				<Route component={ErrorPage} />
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
