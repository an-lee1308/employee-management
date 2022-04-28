import 'antd/dist/antd.css';
import { Button } from 'antd';
import { useHistory, Link } from 'react-router-dom';
// const { Header, Content, Footer, Sider } = Layout;
import './Header.scss';
function Heading() {
	// type Props = {
	//   some?: any,
	//   style?: string,
	// };
	const history = useHistory();
	const handleOnClickEmployee = () => {
		console.log(history);
		history.push('/employee');
	};
	const handleOnClickTeam = () => {
		console.log(history);
		history.push('/teams');
	};
	return (
		<>
			<header className='site-header'>
				<div className='site-identity'>
					<h1>
						<Link to='/'> Employee Management</Link>
					</h1>
				</div>
				<nav className='site-navigation'>
					<ul className='nav'>
						<li>
							<Link to='/employee'>
								<button
									className='btn btn-primary btn-round-1'
									// onClick={handleOnClickEmployee}
								>
									Employee
								</button>
							</Link>
						</li>
						<li>
							<Link to='/teams'>
								<button
									className='btn btn-primary btn-round-1 btn-active'
									// onClick={handleOnClickTeam}
								>
									Team
								</button>
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Heading;
