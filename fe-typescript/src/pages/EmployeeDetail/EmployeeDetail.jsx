import './EmployeeDetail.scss';
import 'antd/dist/antd.css';
import { Tabs, Row, Col, Modal } from 'antd';
import Working from '../../components/Working/Working';
import Information from '../../components/Information/Information';
import Advances from '../../components/Advances/Advances';
import { useHistory, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Statistics from '../../components/Statistics/Statistics';
import axios from 'axios';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';
const { confirm } = Modal;

const { TabPane } = Tabs;

function callback(key) {
	console.log(key);
}

function EmployeeDetail() {
	// type Props = {
	//     some?: any,
	//     style?: string,
	// };

	function handleEdit() {}

	const { id } = useParams();
	const [dataEmployee, setDataEmployee] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const history = useHistory();
	// console.log(id);

	useEffect(() => {
		async function getEmployee() {
			// SetLoading(true);
			const response = await axios.get(
				`http://localhost:8080/api/employees/${id}`
			);
			setDataEmployee(response.data);
			setIsLoading(false);
			console.log('response', response.data);
		}
		getEmployee();
	}, [id]);

	function handleDelete(id) {
		console.log(id);
		function showPromiseConfirm(id) {
			console.log('data in modal', id);
			confirm({
				title: 'Are you sure to delete employee ?',
				icon: <ExclamationCircleOutlined />,
				// content:
				// 	'When clicked the OK button, this dialog will be closed after 1 second',
				async onOk() {
					try {
						const response = await axios.delete(
							// `http://localhost:8080/api/employees/${data}`
							`http://localhost:8080/api/employees/delete/${id}`
						);
						console.log(response);
						toast.success(response.data.message);
						history.push('/');
					} catch (error) {
						toast.error(error);
					}
					return new Promise((resolve, reject) => {
						setTimeout(Math.random() > 0.5 ? resolve : reject, 100);
					}).catch(() => console.log('Oops errors!'));
				},
				onCancel() {},
			});
		}
		showPromiseConfirm(id);
	}

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
	if (isLoading) {
		console.log(isLoading);
	} else {
		return (
			<>
				<div className='head_container'>
					<div className='head_container__title'>{fullName}</div>
					<div className='head_container__button'>
						<div
							className='head_container__button head_container__button--add'
							onClick={() => handleEdit}
						>
							<FaEdit />{' '}
						</div>
						<div
							className='head_container__button head_container__button--delete'
							onClick={() => handleDelete(id)}
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
									{dataEmployee && <Working working={dataEmployee} />}
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
}
export default EmployeeDetail;
