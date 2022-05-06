import './EmployeeDetail.scss';
import 'antd/dist/antd.css';
import { Tabs, Row, Col } from 'antd';
import Working from '../../components/Working/Working';
import Information from '../../components/Information/Information';
import Advances from '../../components/Advances/Advances';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Statistics from '../../components/Statistics/Statistics';
import axios from 'axios';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const { TabPane } = Tabs;

function callback(key) {
	console.log(key);
}

function EmployeeDetail() {
	// type Props = {
	//     some?: any,
	//     style?: string,
	// };
	const { id } = useParams();
	const [dataEmployee, setDataEmployee] = useState({});
	// console.log(id);

	useEffect(() => {
		async function getEmployee() {
			// SetLoading(true);
			const response = await axios.get(
				`http://localhost:8080/api/employees/${id}`
			);
			setDataEmployee(response.data);
			console.log(response.data);
		}
		getEmployee();
	}, [id]);
	console.log('set state', dataEmployee);
	const {
		// address,
		age,
		fullName,
		gender,
		// id,
		imageURL,
		// moneyPerHour,
		// phoneNumber,
		// startDay,
		// team,
		// totalHours,
	} = dataEmployee;
	return (
		<>
			<div className='head_container'>
				<div className='head_container__title'>{fullName}</div>
				<div className='head_container__button'>
					<div
						className='head_container__button head_container__button--add'
						onClick={() => alert('edit')}
					>
						<FaEdit />{' '}
					</div>
					<div
						className='head_container__button head_container__button--delete'
						onClick={() => alert('delete')}
					>
						<FaTrashAlt />{' '}
					</div>
				</div>
			</div>
			<Row className='padding-top'>
				<Col className='gutter-row' span={5}>
					<div className='employee-detail__few-info'>
						<div className='employee-detail__img'>
							<img src={imageURL} alt={'anh hài'} />
							<div className='flex__out'>
								<div className='flex__in'>
									<div className='info-tag tag--no'>No :{id}</div>
									<div className='info-tag tag--age'>Age:{age}</div>
								</div>

								<div className='info-tag tag--sex'>Sex:{gender}</div>
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
								<Information information={dataEmployee} />
							</TabPane>
							<TabPane tab='WORKING' key='working'>
								<Working working={dataEmployee} />{' '}
							</TabPane>
							<TabPane tab='ADVANCES' key='advances'>
								<Advances advances={dataEmployee} />{' '}
							</TabPane>
							<TabPane tab='STATISTICS' key='statistics'>
								<Statistics statistics={dataEmployee} />{' '}
							</TabPane>
						</Tabs>
					</div>
				</Col>
			</Row>
		</>
	);
}

export default EmployeeDetail;
