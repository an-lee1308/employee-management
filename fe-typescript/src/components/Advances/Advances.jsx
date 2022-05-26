import { useState } from 'react';
import { FaPlusCircle, FaTrashAlt } from 'react-icons/fa';
import './Advances.scss';
import 'antd/dist/antd.css';
import { Table, Space, Form, Modal, Input, DatePicker } from 'antd';
import moment from 'moment';
import axios from 'axios';
import { toast } from 'react-toastify';

function Advances(props) {
	// type Props = {
	//     some?: any,
	//     style?: string,
	// };
	const { employeeId, renderPage } = props;
	const { advancesInfo } = props.advances;
	console.log('advancesInfo', advancesInfo);
	advancesInfo.sort((a, b) => b.advancesId - a.advancesId);
	console.log('advancesInfo after sort', advancesInfo);
	const advancesRender = [];
	advancesInfo.forEach((advance, index) => {
		// console.log(employee);
		// const employeeObject = {
		// 	no: index,
		// 	fullname: employee.fullName,
		// 	phone: employee.phoneNumber,
		// 	team: employee.teamID,
		// };
		// console.log('employee object', employeeObject);
		advancesRender.push({
			id: advance.advancesId,
			no: index + 1,
			key: index + 1,
			date: moment(advance.date).utc().format('DD/MM/YYYY'),
			money: advance.money,
		});
	});

	const columns = [
		{
			title: 'No',
			dataIndex: 'no',
		},
		{
			title: 'Date',
			dataIndex: 'date',
		},
		{
			title: 'Money',
			dataIndex: 'money',
		},
		{
			title: 'Option',
			render: (piece) => (
				<Space size='middle'>
					<div
						onClick={() => handleDelete(piece.id)}
						// className='head_container__button head_container__button--add'
						// onClick={showModal}
					>
						<FaTrashAlt />
					</div>
				</Space>
			),
		},
	];

	const formItemLayout = {
		labelCol: {
			span: 6,
		},
		wrapperCol: {
			span: 14,
		},
	};
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [valueForm, setvalueForm] = useState({
		date: moment(Date.now()).format('YYYY/MM/DD'),
		money: '',
	});

	console.log(valueForm);

	const handleDelete = async (id) => {
		console.log(id);
		const response = await axios.delete(
			`http://localhost:8080/api/advances/delete/${id}`
		);
		console.log(response);
		toast.success(response.data.message);
		renderPage();
		setIsModalVisible(false);
		resetForm();
	};

	function onChangeFormDate(e) {
		setvalueForm({
			...valueForm,
			date: e._d,
		});
	}

	function resetForm() {
		setvalueForm({ date: moment(Date.now()).format('YYYY/MM/DD'), money: '' });
	}
	function onChangeForm(e) {
		setvalueForm({
			...valueForm,
			money: e.target.value,
		});
	}

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
			console.log('đủ trường thì nhảy vào đây');
			form.append('date', moment(valueForm.date).format('YYYY/MM/DD'));
			form.append('money', valueForm.money);
			form.append('employeeModel', employeeId);

			for (var pair of form.entries()) {
				console.log(pair[0] + ', ' + pair[1]);
			}
			try {
				const response = await axios.post(
					`http://localhost:8080/api/advances/insert`,
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
			toast.error('Vui lòng điền đầy đủ các trường');
			console.log('văng');
		}
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<>
			<Modal
				title='Add Advances'
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
				destroyOnClose={true}
			>
				<Form {...formItemLayout} autoComplete='off'>
					<Form.Item label='Date'>
						<DatePicker
							onChange={onChangeFormDate}
							name='date'
							defaultValue={moment()}
						/>
					</Form.Item>
					<Form.Item label='Money'>
						<Input onChange={onChangeForm} name='money' />
					</Form.Item>
				</Form>
			</Modal>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<h1>ADVANCES</h1>
				<div
					style={{ fontSize: '2em' }}
					// className='head_container__button head_container__button--add'
					onClick={showModal}
				>
					<FaPlusCircle />
				</div>
			</div>
			<div className='advances-container'>
				<Table columns={columns} dataSource={advancesRender} />
			</div>
		</>
	);
}

export default Advances;
