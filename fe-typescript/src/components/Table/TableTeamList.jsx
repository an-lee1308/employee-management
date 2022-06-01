import { FaAddressCard } from 'react-icons/fa';
import 'antd/dist/antd.css';
import './Table.scss';
import { useHistory } from 'react-router-dom';
import { Table, Tag, Space } from 'antd';

function TableTeamList(props) {
	// type Props = {
	//     some?: any,
	//     style?: string,
	// };
	const history = useHistory();
	const { teamList } = props;

	const teamRender = [];
	teamList.forEach((team, index) => {
		// //console.log(employee);
		// const employeeObject = {
		// 	no: index,
		// 	fullname: employee.fullName,
		// 	phone: employee.phoneNumber,
		// 	team: employee.teamID,
		// };
		// //console.log('employee object', employeeObject);
		teamRender.push({
			id: team.teamId,
			no: index + 1,
			key: index + 1,
			nameteam: team.name,
		});
	});

	const columns = [
		{
			title: 'No',
			dataIndex: 'key',
		},
		{
			title: 'Name Team',
			dataIndex: 'nameteam',
		},
		{
			title: 'Option',

			render: (piece) => (
				<Space size='middle'>
					<div
						style={{ cursor: 'pointer' }}
						onClick={() => {
							//console.log(piece.id);
							history.push(`/teams/${piece.id}`);
						}}
					>
						<FaAddressCard />
					</div>
				</Space>
			),
		},
	];

	return (
		<>
			<Table
				className='hiden-pagination'
				columns={columns}
				dataSource={teamRender}
			/>
		</>
	);
}

export default TableTeamList;
