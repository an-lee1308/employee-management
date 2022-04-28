import './Teams.scss';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import TableTeamList from '../../components/Table/TableTeamList';
import TableMemberList from '../../components/Table/TableMemberList';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

function Teams() {
	// type Props = {
	//     some?: any,
	//     style?: string,
	// };
	return (
		<>
			<div className='head_container'>
				<div className='head_container__title'>Team</div>
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
			<Row>
				<Col className='gutter-row' span={8}>
					<TableTeamList />
				</Col>
				<Col className='gutter-row' span={1}></Col>
				<Col className='gutter-row' span={15}>
					<TableMemberList />
				</Col>
			</Row>
		</>
	);
}

export default Teams;
