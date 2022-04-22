import './Information.scss';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';

function Information(props) {
	// type Props = {
	//     some?: any,
	//     style?: string,
	// };
	return (
		<>
			<h1>INFORMATION</h1>
			<div className='info-container'>
				<Row gutter={16}>
					<Col className='gutter-row' span={12}>
						<div className='info-box'>Start day 17-01-2021</div>
					</Col>
					<Col className='gutter-row' span={12}>
						<div className='info-box'>Team : IT Support</div>
					</Col>
					<Col className='gutter-row' span={12}>
						<div className='info-box'>Address : Quy Nhơn</div>
					</Col>
					<Col className='gutter-row' span={12}>
						<div className='info-box'>Salary Per hour : 2$S</div>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default Information;
