import './Teams.scss';
import 'antd/dist/antd.css';
import { Row, Col, Spin, Modal, Form, DatePicker, Input } from 'antd';
import TableTeamList from '../../components/Table/TableTeamList';
import TableMemberList from '../../components/Table/TableMemberList';
import { FaPlusCircle } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { toast } from 'react-toastify';

function Teams(props) {
	// type Props = {
	//     some?: any,
	//     style?: string,
	// };
	const { renderPage, render } = props;
	const [teamList, setTeamList] = useState([]);
	const [teamMember, setTeamMember] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [valueForm, setvalueForm] = useState({
		name: '',
	});

	const { id } = useParams();
	//console.log(id);

	useEffect(() => {
		async function getTeamList() {
			// SetLoading(true);
			const response = await axios.get(`http://localhost:8080/api/team/list`);

			//console.log('response', response.data);
			setTeamList(response.data);
			setIsLoading(false);
		}
		getTeamList();
	}, [render]);

	useEffect(() => {
		async function getTeamMember() {
			// SetLoading(true);
			const response = await axios.get(`http://localhost:8080/api/team/${id}`);

			//console.log('response data team', response.data);
			setTeamMember(response.data);
		}
		id ? getTeamMember() : //console.log('no call api');
	}, [id]);

	const formItemLayout = {
		labelCol: {
			span: 6,
		},
		wrapperCol: {
			span: 14,
		},
	};

	//console.log('value form', valueForm);

	const handleDelete = async (id) => {
		//console.log(id);
		const response = await axios.delete(
			`http://localhost:8080/api/working/delete/${id}`
		);
		//console.log(response);
		toast.success(response.data.message);
		renderPage();
		setIsModalVisible(false);
		resetForm();
	};

	function resetForm() {
		setvalueForm({ name: '' });
	}
	function onChangeForm(e) {
		setvalueForm({
			...valueForm,
			[e.target.name]: e.target.value,
		});
	}

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = async () => {
		//console.log(valueForm);
		// const isEmpty = Object.values(valueForm).some((x) => x === '');
		const isEmpty = Object.values(valueForm).every((x) => x !== '');
		//console.log(isEmpty);
		const form = new FormData();
		if (isEmpty) {
			//console.log('value fornm', valueForm);
			//console.log('đủ trường thì nhảy vào đây');
			form.append('name', valueForm.name);

			for (var pair of form.entries()) {
				//console.log(pair[0] + ', ' + pair[1]);
			}
			try {
				const response = await axios.post(
					`http://localhost:8080/api/team/insert`,
					form,
					{
						headers: {
							'Content-Type': 'multipart/form-data',
						},
					}
				);
				//console.log('response sau update', response);
				toast.success(response.data.message);
				renderPage();
				setIsModalVisible(false);
				resetForm();
			} catch (error) {
				//console.log(error);
			}
		} else {
			toast.error('Vui lòng điền đầy đủ các trường');
			//console.log('văng');
		}
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<div>
			<Modal
				title='Add New Team'
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
				destroyOnClose={true}
			>
				<Form {...formItemLayout} autoComplete='off'>
					<Form.Item label='Name'>
						<Input onChange={onChangeForm} name='name' />
					</Form.Item>
				</Form>
			</Modal>
			<div className='head_container'>
				<div className='head_container__title'>Team</div>
				<div className='head_container__button'>
					<div
						className='head_container__button head_container__button--add'
						onClick={showModal}
					>
						<FaPlusCircle />{' '}
					</div>
				</div>
			</div>
			{isLoading ? (
				<div style={{ marginLeft: '28vmax' }}>
					<Spin tip='Loading...' />
				</div>
			) : (
				<Row>
					<Col className='gutter-row' span={8}>
						<div>Total {teamList.length} teams</div>
						<TableTeamList teamList={teamList} />
					</Col>
					<Col className='gutter-row' span={1}></Col>
					{id && teamMember.employee && (
						<Col className='gutter-row' span={15}>
							<div>
								Result all employee team {teamMember.name} - Total{' '}
								{teamMember.employee.length} employees
							</div>
							<TableMemberList teamMember={teamMember} />
						</Col>
					)}
				</Row>
			)}
		</div>
	);
}

export default Teams;
