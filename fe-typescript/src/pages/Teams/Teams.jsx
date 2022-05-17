import './Teams.scss';
import 'antd/dist/antd.css';
import { Row, Col, Spin } from 'antd';
import TableTeamList from '../../components/Table/TableTeamList';
import TableMemberList from '../../components/Table/TableMemberList';
import { FaPlusCircle } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Teams() {
	// type Props = {
	//     some?: any,
	//     style?: string,
	// };
	const [teamList, setTeamList] = useState([]);
	const [teamMember, setTeamMember] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { id } = useParams();
	console.log(id);

	useEffect(() => {
		async function getTeamList() {
			// SetLoading(true);
			const response = await axios.get(`http://localhost:8080/api/team/list`);

			console.log('response', response.data);
			setTeamList(response.data);
			setIsLoading(false);
		}
		getTeamList();
	}, []);

	useEffect(() => {
		async function getTeamMember() {
			// SetLoading(true);
			const response = await axios.get(`http://localhost:8080/api/team/${id}`);

			console.log('response data team', response.data);
			setTeamMember(response.data);
		}
		id ? getTeamMember() : console.log('no call api');
	}, [id]);

	return (
		<div>
			<div className='head_container'>
				<div className='head_container__title'>Team</div>
				<div className='head_container__button'>
					<div
						className='head_container__button head_container__button--add'
						onClick={() => alert('add a new team')}
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
								Result all employee team Manager - Total{' '}
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
