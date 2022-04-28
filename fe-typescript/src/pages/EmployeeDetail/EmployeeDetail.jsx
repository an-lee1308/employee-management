import './EmployeeDetail.scss';
import 'antd/dist/antd.css';
import { Tabs, Row, Col } from 'antd';
import Working from '../../components/Working/Working';
import Information from '../../components/Information/Information';
import Advances from '../../components/Advances/Advances';
import Statistics from '../../components/Statistics/Statistics';

const { TabPane } = Tabs;

function callback(key) {
	console.log(key);
}

function EmployeeDetail() {
	// type Props = {
	//     some?: any,
	//     style?: string,
	// };
	return (
		<>
			<Row className='padding-top'>
				<Col className='gutter-row' span={5}>
					<div className='employee-detail__few-info'>
						<div className='employee-detail__img'>
							<img src='https://danviet.mediacdn.vn/2021/2/13/dichlenhietba6-1613220430583-1613220430583923058279.jpg' />
							<div className='flex__out'>
								<div className='flex__in'>
									<div className='info-tag tag--no'>No:1</div>
									<div className='info-tag tag--age'>Age:22</div>
								</div>

								<div className='info-tag tag--sex'>Sex:male</div>
							</div>
						</div>
					</div>
				</Col>
				<Col className='gutter-row' span={1}>
					{' '}
				</Col>
				<Col className='gutter-row employee-detail' span={18}>
					<div className='employee-detail__information carrd-container'>
						<Tabs type='card' defaultActiveKey='1' onChange={callback}>
							<TabPane tab='INFORMATION' key='information'>
								<Information name='hihi' />
							</TabPane>
							<TabPane tab='WORKING' key='working'>
								<Working name='haha' />{' '}
							</TabPane>
							<TabPane tab='ADVANCES' key='advances'>
								<Advances name='haha' />{' '}
							</TabPane>
							<TabPane tab='STATISTICS' key='statistics'>
								<Statistics name='haha' />{' '}
							</TabPane>
						</Tabs>
					</div>
				</Col>
			</Row>
		</>
	);
}

export default EmployeeDetail;
