import 'antd/dist/antd.css';
import './Table.scss';
import { Table, Space } from 'antd';

function TableMemberList(props) {
	// type Props = {
	//     some?: any,
	//     style?: string,
	// };
	// const { teamMember } = props;
	const teamMember = props.teamMember.employee;
	console.log('team member', teamMember);

	const meberRender = [];
	teamMember.forEach((member, index) => {
		meberRender.push({
			id: member.employeeId,
			no: index + 1,
			key: index + 1,
			fullname: member.fullName,
			phone: member.phoneNumber,
			address: member.address,
			sex: member.gender,
		});
	});
	const columns = [
		{
			title: 'No',
			dataIndex: 'no',
		},
		{
			title: 'FullName',
			dataIndex: 'fullname',
		},
		{
			title: 'Phone',
			dataIndex: 'phone',
		},
		{
			title: 'Address',
			dataIndex: 'address',
		},
		{
			title: 'Sex',
			dataIndex: 'sex',
		},
	];

	const data = [
		{
			no: '1',
			fullname: `Lee Van An`,
			phone: '0992929289',
			address: 32,
			sex: `Male`,
		},
		{
			no: '1',
			fullname: `Lee Van An`,
			phone: '0992929289',
			address: 32,
			sex: `Male`,
		},
		{
			no: '1',
			fullname: `Lee Van An1`,
			phone: '0992929289',
			address: 32,
			sex: `Male`,
		},
		{
			no: '3',
			fullname: `Lee Van An`,
			phone: '0992929289',
			address: 32,
			sex: `Male`,
		},
	];
	return (
		<>
			<Table
				className='hiden-pagination'
				columns={columns}
				dataSource={meberRender}
			/>
		</>
	);
}

export default TableMemberList;
