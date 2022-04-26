import { FaPlusCircle, FaTrashAlt } from 'react-icons/fa';
import { useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Select, Input, Button, Upload, Modal, DatePicker } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import './HeadContainer.scss';
function HeadContainer() {
	// type Props = {
	//     some?: any,
	//     style?: string,
	//     Modal?: any
	// };
	const { Option } = Select;
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

		if (Array.isArray(e)) {
			return e;
		}

		return e && e.fileList;
	};

	const onFinish = (values) => {
		console.log('Received values of form: ', values);
	};

	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
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
					<div className='head_container__button head_container__button--delete'>
						<FaTrashAlt />{' '}
					</div>
				</div>
			</div>
			<Modal
				title='Add new Employee'
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<Form
					name='validate_other'
					{...formItemLayout}
					onFinish={onFinish}
					initialValues={{
						'input-number': 3,
						'checkbox-group': ['A', 'B'],
						rate: 3.5,
					}}
				>
					<Form.Item label='Fullname employee'>
						<Input onChange={(e) => console.log(e.target.value)} />
					</Form.Item>

					<Form.Item label='Address'>
						<Input />
					</Form.Item>
					<Form.Item label='Sex employee'>
						<Select>
							<Select.Option value='Male'>Male</Select.Option>
							<Select.Option value='Female'>Female</Select.Option>
						</Select>
					</Form.Item>

					<Form.Item label='Age'>
						<Input />
					</Form.Item>
					<Form.Item label='Start day'>
						<DatePicker onChange={(e) => console.log(e._d)} />
					</Form.Item>

					<Form.Item label='Money/hour'>
						<Input />
					</Form.Item>

					<Form.Item
						name='upload'
						label='Upload image'
						valuePropName='fileList'
						getValueFromEvent={normFile}
					>
						{/* <Upload name='logo' action='/upload.do' listType='picture'> */}
						<Upload>
							<Button icon={<UploadOutlined />}>Click to upload</Button>
						</Upload>
					</Form.Item>
					<Form.Item label='Phone number'>
						<Input />
					</Form.Item>

					<Form.Item label='Total hours'>
						<Input />
					</Form.Item>
					<Form.Item label='Team'>
						<Input />
					</Form.Item>
					<Form.Item
						wrapperCol={{
							span: 12,
							offset: 6,
						}}
					>
						<Button type='primary' htmlType='submit'>
							Submit
						</Button>
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
}

export default HeadContainer;
