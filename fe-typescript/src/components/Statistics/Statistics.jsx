import './Statistics.scss';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';

function Statistics(props) {
	// type Props = {
	//     some?: any,
	//     style?: string,
	// };
	return (
		<>
			<h1>STATISTICS</h1>
			<div className='info-container'>
				<Row gutter={24}>
					<Col className='gutter-row' span={24}>
						<div className='info-box'>All money</div>
					</Col>
				</Row>
				<Row gutter={24}>
					<Col className='gutter-row' span={24}>
						<div className='info-box'>Number of wworking dya</div>
					</Col>
				</Row>
				<Row gutter={24}>
					<Col className='gutter-row' span={24}>
						<div className='info-box'>Total get</div>
					</Col>
				</Row>
				<Row gutter={24}>
					<Col className='gutter-row' span={24}>
						<div className='info-box'>Total advances</div>
					</Col>
				</Row>
				<Row gutter={24}>
					<Col className='gutter-row' span={24}>
						<div className='info-box'>Sumary</div>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default Statistics;
