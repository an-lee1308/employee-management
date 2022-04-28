import './Teams.scss';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import TableTeamList from '../../components/Table/TableTeamList';
import TableMemberList from '../../components/Table/TableMemberList';

function Teams() {
	// type Props = {
	//     some?: any,
	//     style?: string,
	// };
	return (
		<>
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
