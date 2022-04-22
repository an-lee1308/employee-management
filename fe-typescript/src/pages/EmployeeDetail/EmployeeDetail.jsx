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
			<Row gutter={16}>
				<Col className='gutter-row' span={6}>
					<div className='employee-detail__few-info'>
						<div className='employee-detail__img'>
							<img src='https://freetuts.net/upload/tut_post/images/2014/08/14/122/xay-dung-chuc-nang-scrollto-voi-jquery.gif' />
						</div>
						<div className='flex__out'>
							<div className='flex__in'>
								<div className='tag--no'>No:1</div>
								<div className='tag--age'>Age:22</div>
							</div>
							<div className='tag--sex'>Sex:male</div>
						</div>
					</div>
				</Col>
				<Col className='gutter-row' span={18}>
					<div className='employee-detail__information'>
						<Tabs defaultActiveKey='1' onChange={callback}>
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
