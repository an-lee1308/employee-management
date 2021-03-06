import { FaPlusCircle, FaTrashAlt } from 'react-icons/fa';
import { useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Select, Input, Button, Upload, Modal, DatePicker } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import './HeadContainer.scss';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

// const formData = new formData();

function HeadContainer(props) {
	// type Props = {
	//     some?: any,
	//     style?: string,
	//     Modal?: any
	// };
	const { renderPage, selectedDelete } = props;
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
	});
	console.log(selectedDelete, 'selectedDelete in head container');
	const [teamList, setTeamList] = useState([]);
	useEffect(() => {
		async function getTeamList() {
			// SetLoading(true);
			const response = await axios.get(`http://localhost:8080/api/team/list`);

			console.log('response', response.data);
			setTeamList(response.data);
		}
		getTeamList();
	}, []);
	console.log(valueForm);
	function onChangeFormSelect(e) {
		console.log(e);
		setvalueForm({
			...valueForm,
			gender: e,
		});
	}

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

	function onChangeFormSelectTeam(e) {
		console.log(e);
		setvalueForm({
			...valueForm,
			employeeteam: e,
		});
	}

	function onChangeDatePicker(e) {
		console.log(e._d);
		setvalueForm({
			...valueForm,
			startday: e._d,
		});
	}

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

	const handleDelete = async (selectedDelete) => {
		console.log('handle delete', selectedDelete);
		try {
			const response = await axios.delete(
				`http://localhost:8080/api/employees/delete`,
				{ data: selectedDelete }
			);
			console.log(response);
			renderPage();
		} catch (e) {
			console.log(e);
		}
		//truy???n m???ng v?? data l?? dc
	};
	// const { Option } = Select;
	const formItemLayout = {
		labelCol: {
			span: 6,
		},
		wrapperCol: {
			span: 14,
		},
	};

	const normFile = (e) => {
		console.log('Upload event:', e);
		console.log('Test', e.file);

		// if (Array.isArray(e)) {
		// 	return e;
		// }

		// return e && e.fileList;
	};

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
			for (var pair of form.entries()) {
				console.log(pair[0] + ', ' + pair[1]);
			}
			try {
				const response = await axios.post(
					`http://localhost:8080/api/employees/create`,
					form,
					{
						headers: {
							'Content-Type': 'multipart/form-data',
						},
					}
				);
				console.log(response);
				toast.success(response.data.message);
				renderPage();
				setIsModalVisible(false);
				resetForm();
			} catch (error) {
				throw new Error('Fail to post this datta');
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
	return (
		<>
			<div className='head_container'>
				<div className='head_container__title'>Employee</div>
				<div className='head_container__button'>
					<div
						className='head_container__button head_container__button--add'
						onClick={showModal}
					>
						<FaPlusCircle />{' '}
					</div>
					<div
						className='head_container__button head_container__button--delete'
						onClick={() => handleDelete(selectedDelete)}
					>
						<FaTrashAlt />
					</div>
				</div>
			</div>
			<Modal
				title='Add new Employee'
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
				destroyOnClose={true}
			>
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
					<Form.Item
						name='fullname'
						label='Full name'
						hasFeedback
						rules={[
							{
								required: true,
								message: 'Please input Full Name!',
							},
						]}
					>
						<Input
							// disabled
							placeholder='Type your name'
							onChange={onChangeForm}
							name='fullname'
							value={valueForm.fullname}
						/>
					</Form.Item>

					<Form.Item
						label='Address'
						name='address'
						hasFeedback
						rules={[
							{
								required: true,
								message: 'Please input Address!',
							},
						]}
					>
						<Input
							onChange={onChangeForm}
							name='address'
							value={valueForm.address}
						/>
					</Form.Item>
					<Form.Item
						label='Sex employee'
						name='gender'
						hasFeedback
						rules={[
							{
								required: true,
								message: 'Please input gender!',
							},
						]}
					>
						<Select
							onChange={onChangeFormSelect}
							// name='gender'
							value={valueForm.gender}
						>
							<Select.Option value='Male'>Male</Select.Option>
							<Select.Option value='Female'>Female</Select.Option>
						</Select>
					</Form.Item>

					<Form.Item
						label='Age'
						name='age'
						hasFeedback
						rules={[
							{
								required: true,
								message: 'Please input Age!',
							},
						]}
					>
						<Input
							onChange={onChangeForm}
							name='age'
							// type={'number'}
							value={valueForm.age}
						/>
					</Form.Item>
					<Form.Item
						label='Start day'
						name='startday'
						hasFeedback
						rules={[
							{
								required: true,
								message: 'Please input Start Day!',
							},
						]}
					>
						<DatePicker
							onChange={onChangeDatePicker}
							name='startday'
							// type={'number'}
						/>
					</Form.Item>

					<Form.Item
						label='Money/hour'
						name='moneyperhour'
						hasFeedback
						rules={[
							{
								required: true,
								message: 'Please input Money Per Hour!',
							},
						]}
					>
						<Input
							onChange={onChangeForm}
							name='moneyperhour'
							// type={'number'}
							value={valueForm.moneyperhour}
						/>
					</Form.Item>

					<Form.Item
						// name='upload'
						label='Upload image'
						// valuePropName='fileList'
						// getValueFromEvent={normFile}
						// onChange={(e) => console.log(e)}
						// name='image'
						// hasFeedback
						// rules={[
						// 	{
						// 		required: true,
						// 		message: 'Please upload Image!',
						// 	},
						// ]}
					>
						{/* <Upload name='logo' action='/upload.do' listType='picture'></Upload> */}
						<Upload
							listType='picture'
							action={''}
							// accept='.png,.jpeg'
							onChange={onChangeFormUpload}
							customRequest={dummyRequest}
						>
							<Button icon={<UploadOutlined />}>Click to upload</Button>
						</Upload>
					</Form.Item>
					<Form.Item
						label='Phone number'
						name='phonenumber'
						hasFeedback
						rules={[
							{
								required: true,
								message: 'Please input phone Number!',
							},
							{
								// pattern: new RegExp('([0-9]{10}\\s*)+'),
								// pattern: new RegExp('[0-9]{10}/g'),
								pattern: new RegExp('((09|03|07|08|05)+([0-9]{8}))$'), //That's true regex VietNam number

								message: 'phone number must have 10 number',
							},
							// {
							// 	type: 'number',
							// 	message: 'The input is not valid Number!',
							// },
						]}
					>
						<Input
							onChange={onChangeForm}
							name='phonenumber'
							// type={'number'}
							value={valueForm.phonenumber}
						/>
					</Form.Item>

					<Form.Item
						label='Total hours'
						name='totalhours'
						hasFeedback
						rules={[
							{
								required: true,
								message: 'Please input Total Hours!',
							},
						]}
					>
						<Input
							onChange={onChangeForm}
							name='totalhours'
							// type={'number'}
							value={valueForm.totalhours}
						/>
					</Form.Item>
					<Form.Item
						label='Team'
						name='team'
						hasFeedback
						rules={[
							{
								required: true,
								message: 'Please input Team!',
							},
						]}
					>
						<Select
							onChange={onChangeFormSelectTeam}
							value={valueForm.employeeteam}
						>
							{teamList &&
								teamList.length > 0 &&
								teamList.map((team, index) => {
									return (
										<Select.Option value={team.teamId} key={index}>
											{team.name}
										</Select.Option>
									);
								})}
						</Select>
					</Form.Item>
					{/* <Form.Item
						wrapperCol={{
							span: 12,
							offset: 6,
						}}
					>
						<Button type='primary' htmlType='submit'>
							Submit
						</Button>
					</Form.Item> */}
				</Form>
			</Modal>
		</>
	);
}

export default HeadContainer;
