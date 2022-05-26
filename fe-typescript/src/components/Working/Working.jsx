import { useState } from 'react';
import './Working.scss';
import 'antd/dist/antd.css';
import { FaPlusCircle, FaTrashAlt } from 'react-icons/fa';
import { Table, Space, Form, Modal, Input, DatePicker } from 'antd';
import moment from 'moment';
import axios from 'axios';
import { toast } from 'react-toastify';

//Thiếu cái render

function Working(props) {
	const { employeeId, renderPage } = props;
	const { workingInfo } = props.working;

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
			title: 'Hour',
			dataIndex: 'hour',
		},
		{
			title: 'Option',
			render: (piece) => (
				<Space size='middle'>
					<div
						onClick={() => handleDelete(piece.id)}
						// className='head_container__button head_container__button--add'
					>
						<FaTrashAlt />
					</div>
				</Space>
			),
		},
	];
	const workingRender = [];
	console.log('workingInfo', workingInfo);
	workingInfo.sort((a, b) => b.workingId - a.workingId);
	console.log('workingInfo after sort', workingInfo);
	workingInfo.forEach((working, index) => {
		workingRender.push({
			id: working.workingId,
			no: index + 1,
			key: index + 1,
			date: moment(working.date).utc().format('DD/MM/YYYY'),
			hour: working.hour,
		});
	});
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
		hour: '',
	});

	console.log('value form', valueForm);

	const handleDelete = async (id) => {
		console.log(id);
		const response = await axios.delete(
			`http://localhost:8080/api/working/delete/${id}`
		);
		console.log(response);
		toast.success(response.data.message);
		renderPage();
		setIsModalVisible(false);
		resetForm();
	};

	function resetForm() {
		setvalueForm({ date: moment(Date.now()).format('YYYY/MM/DD'), hour: '' });
	}
	function onChangeFormDate(e) {
		setvalueForm({
			...valueForm,
			date: e._d,
		});
	}
	function onChangeForm(e) {
		setvalueForm({
			...valueForm,
			hour: e.target.value,
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
			form.append('hour', valueForm.hour);
			form.append('employeeModel', employeeId);

			for (var pair of form.entries()) {
				console.log(pair[0] + ', ' + pair[1]);
			}
			try {
				const response = await axios.post(
					`http://localhost:8080/api/working/insert`,
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
				title='Add Working'
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
					<Form.Item label='Hour'>
						<Input onChange={onChangeForm} name='hour' />
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
				<h1>WORKING</h1>
				<div
					style={{ fontSize: '2em' }}
					// className='head_container__button head_container__button--add'
					// onClick={showModal}
					onClick={showModal}
				>
					<FaPlusCircle />
				</div>
			</div>
			<div className='working-container'>
				<Table columns={columns} dataSource={workingRender} />
			</div>
		</>
	);
}

export default Working;
