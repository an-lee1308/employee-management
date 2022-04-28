import 'antd/dist/antd.css';
import './Table.scss';
import { Table, Space } from 'antd';

function TableMemberList(props) {
	// type Props = {
	//     some?: any,
	//     style?: string,
	// };
	const columns = [
		{
			title: 'No',
			dataIndex: 'no',
			key: 'no',
		},
		{
			title: 'FullName',
			dataIndex: 'fullname',
			key: 'fullname',
		},
		{
			title: 'Phone',
			dataIndex: 'phone',
			key: 'phone',
		},
		{
			title: 'Address',
			dataIndex: 'address',
			key: 'address',
		},
		{
			title: 'Sex',
			dataIndex: 'sex',
			key: 'sex',
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
			<Table className='hiden-pagination' columns={columns} dataSource={data} />
		</>
	);
}

export default TableMemberList;
