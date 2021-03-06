import './EmployeeDetail.scss';
import 'antd/dist/antd.css';
import {
	Tabs,
	Row,
	Col,
	Input,
	Upload,
	Modal,
	Form,
	Avatar,
	Image,
	Button,
} from 'antd';
import Working from '../../components/Working/Working';
import Information from '../../components/Information/Information';
import Advances from '../../components/Advances/Advances';
import { useHistory, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Statistics from '../../components/Statistics/Statistics';
import axios from 'axios';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import {
	ExclamationCircleOutlined,
	AntDesignOutlined,
	UploadOutlined,
} from '@ant-design/icons';
import moment from 'moment';

import { toast } from 'react-toastify';
const { confirm } = Modal;

const { TabPane } = Tabs;

function callback(key) {
	console.log(key);
}

function EmployeeDetail(props) {
	// type Props = {
	//     some?: any,
	//     style?: string,
	// };
	const { render, renderPage } = props;
	function handleEdit() {}

	const { id } = useParams();
	const [dataEmployee, setDataEmployee] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [valueForm, setvalueForm] = useState({
		fullname: '',
		age: '',
		address: '',
		gender: '',
		phonenumber: '',
		startday: '',
		totalhours: '',
		moneyperhour: '',
		employeeteam: '',
		ImageUrl: '',
	});
	const history = useHistory();
	// console.log(id);

	useEffect(() => {
		async function getEmployee() {
			// SetLoading(true);
			const response = await axios.get(
				`http://localhost:8080/api/employees/${id}`
			);
			setDataEmployee(response.data);

			setvalueForm({
				fullname: response.data.fullName,
				age: response.data.age,
				address: response.data.address,
				gender: response.data.gender,
				phonenumber: response.data.phoneNumber,
				startday: moment(response.data.startDay).utc().format('YYYY/MM/DD'),
				totalhours: response.data.totalHours,
				moneyperhour: response.data.moneyPerHour,
				employeeteam: response.data.teamId,
				ImageUrl: response.data.imageURL,
			});

			setIsLoading(false);
			console.log('response', response.data);
		}
		getEmployee();
	}, [id, render]);

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
						history.push('/employee');
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
	console.log('set value form', valueForm);

	const {
		address,
		age,
		fullName,
		gender,
		// employeeId,
		imageURL,
		moneyPerHour,
		phoneNumber,
		startDay,
		teamId,
		totalHours,
	} = dataEmployee;

	// valueForm({
	// 	fullname: fullName,
	// 	age: age,
	// 	address: address,
	// 	gender: gender,
	// 	phonenumber: phoneNumber,
	// 	startday: startDay,
	// 	totalhours: totalHours,
	// 	moneyperhour: moneyPerHour,
	// 	// employeeteam: teamInfo.name,
	// 	ImageUrl: imageURL,
	// });
	const formItemLayout = {
		labelCol: {
			span: 6,
		},
		wrapperCol: {
			span: 14,
		},
	};

	function onChangeFormUpload(e) {
		console.log(e.file.originFileObj);
		if (e.fileList.length > 0) {
			var src = URL.createObjectURL(e.file.originFileObj);
			console.log('Lofg src', src);
		}
		setvalueForm({
			...valueForm,
			image: e.file.originFileObj,
		});
	}

	const dummyRequest = ({ file, onSuccess }) => {
		setTimeout(() => {
			onSuccess('ok');
		}, 0);
	};

	function onChangeForm(e) {
		setvalueForm({
			...valueForm,
			[e.target.name]: e.target.value,
		});
	}

	function resetForm() {
		setvalueForm({
			fullname: '',
			age: '',
			address: '',
			gender: '',
			phonenumber: '',
			startday: '',
			totalhours: '',
			moneyperhour: '',
			employeeteam: '',
		});
	}

	const onFinish = (values) => {
		console.log('Received values of form: ', values);
	};

	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = async () => {
		console.log(valueForm);
		// const isEmpty = Object.values(valueForm).some((x) => x === '');
		const isEmpty = Object.values(valueForm).every((x) => x !== '');
		console.log(isEmpty);
		const form = new FormData();
		if (isEmpty) {
			console.log('value fornm', valueForm);
			console.log('????? tr?????ng th?? nh???y v??o ????y');
			if (valueForm.image) {
				form.append('fullName', valueForm.fullname);
				form.append('age', valueForm.age);
				form.append('address', valueForm.address);
				form.append('gender', valueForm.gender);
				form.append('phoneNumber', valueForm.phonenumber);
				form.append('moneyPerHour', valueForm.moneyperhour);
				form.append('startDay', valueForm.startday);
				form.append('totalHours', valueForm.totalhours);
				form.append('file', valueForm.image);

				form.append('employeeTeam', valueForm.employeeteam);
				console.log('c?? ???nh');
			} else {
				form.append('fullName', valueForm.fullname);
				form.append('age', valueForm.age);
				form.append('address', valueForm.address);
				form.append('gender', valueForm.gender);
				form.append('phoneNumber', valueForm.phonenumber);
				form.append('moneyPerHour', valueForm.moneyperhour);
				form.append('startDay', valueForm.startday);
				form.append('totalHours', valueForm.totalhours);
				// form.append('file', '');
				form.append('employeeTeam', valueForm.employeeteam);
				console.log('ko c?? ???nh');
			}
			for (var pair of form.entries()) {
				console.log(pair[0] + ', ' + pair[1]);
			}
			try {
				const response = await axios.put(
					`http://localhost:8080/api/employees/update/${id}`,
					form,
					{
						headers: {
							'Content-Type': 'multipart/form-data',
						},
					}
				);
				console.log('response sau update', response);
				toast.success(response.data.message);
				renderPage();
				setIsModalVisible(false);
				resetForm();
			} catch (error) {
				console.log(error);
			}
		} else {
			// setIsModalVisible(false);
			// resetForm();

			// var form = new FormData();
			toast.error('Vui l??ng ??i???n ?????y ????? c??c tr?????ng');
			console.log('v??ng');
			onFinish();
		}
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	if (isLoading) {
		console.log(isLoading);
	} else {
		return (
			<>
				<Modal
					title='Edit Employee'
					visible={isModalVisible}
					onOk={handleOk}
					onCancel={handleCancel}
					destroyOnClose={true}
				>
					<Avatar
						src={valueForm.ImageUrl}
						size={{
							xs: 24,
							sm: 32,
							md: 40,
							lg: 64,
							xl: 80,
							xxl: 100,
						}}
						icon={<AntDesignOutlined />}
					/>
					{/* <Image
						width={100}
						height={100}
						preview={{
							src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
						}}
						style={{ objectFit: 'cover', borderRadius: '50px' }}
						src='https://newsmd1fr.keeng.net/tiin/archive/images/20210215/191503_batch_148189203_1082353422243802_7176013939645211715_o.jpg'
					/> */}
					<Form
						{...formItemLayout}
						// onFinish={onFinish}
						// initialValues={{
						// 	'input-number': 3,
						// 	'checkbox-group': ['A', 'B'],
						// 	rate: 3.5,
						// }}
						autoComplete='off'
						onFinish={onFinish}
					>
						<Row>
							<Col span={12}>
								<Form.Item label='Full name'>
									<Input
										// placeholder='Type your name'
										onChange={onChangeForm}
										name='fullname'
										hasFeedback
										rules={[
											{
												required: true,
												message: 'Please input Full Name!',
											},
										]}
										value={valueForm.fullname}
									/>
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item label='Address'>
									<Input
										// placeholder='Type your name'
										onChange={onChangeForm}
										name='address'
										value={valueForm.address}
										hasFeedback
										rules={[
											{
												required: true,
												message: 'Please input Full Name!',
											},
										]}
									/>
								</Form.Item>
							</Col>
						</Row>
						<Row>
							<Col span={12}>
								<Form.Item label='Start day'>
									<Input
										disabled
										// placeholder='Type your name'
										// onChange={onChangeForm}
										name='startday'
										value={moment(valueForm.startday)
											.utc()
											.format('DD/MM/YYYY')}
									/>
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item label='Money Per Hour'>
									<Input
										disabled
										// placeholder='Type your name'
										// onChange={onChangeForm}
										name='moneyperhour'
										value={valueForm.moneyperhour}
									/>
								</Form.Item>
							</Col>
						</Row>
						<Row>
							<Col span={12}>
								<Form.Item
									// name='phonenumber'
									label='Phone Number'
									// hasFeedback
									// rules={[
									// 	{
									// 		required: true,
									// 		message: 'Please input phone Number!',
									// 	},
									// 	{
									// 		// pattern: new RegExp('([0-9]{10}\\s*)+'),
									// 		// pattern: new RegExp('[0-9]{10}/g'),
									// 		pattern: new RegExp('((09|03|07|08|05)+([0-9]{8}))$'), //That's true regex VietNam number

									// 		message: 'phone number must have 10 number',
									// 	},
									// ]}
								>
									<Input
										// disabled
										// placeholder='Type your name'
										onChange={onChangeForm}
										name='phonenumber'
										value={valueForm.phonenumber}
									/>
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item label='Total hours'>
									<Input
										disabled
										// placeholder='Type your name'
										// onChange={onChangeForm}
										name='fullname'
										value={valueForm.totalhours}
									/>
								</Form.Item>
							</Col>
						</Row>
						<div className='upload-picture'>
							<Row>
								<Col span={24}>
									<Form.Item label='Upload Image'>
										<Upload
											listType='picture'
											action={''}
											accept='.png,.jpeg'
											onChange={onChangeFormUpload}
											customRequest={dummyRequest}
										>
											<Button icon={<UploadOutlined />}>Click to upload</Button>
										</Upload>
									</Form.Item>
								</Col>
							</Row>
						</div>
					</Form>
				</Modal>
				<div className='head_container'>
					<div className='head_container__title'>{fullName}</div>
					<div className='head_container__button'>
						<div
							className='head_container__button head_container__button--add'
							onClick={showModal}
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
								<img src={imageURL} alt={'anh h??i'} />
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
									{dataEmployee && (
										<Working
											renderPage={renderPage}
											employeeId={id}
											working={dataEmployee}
										/>
									)}
								</TabPane>
								<TabPane tab='ADVANCES' key='advances'>
									<Advances
										renderPage={renderPage}
										employeeId={id}
										advances={dataEmployee}
									/>{' '}
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
