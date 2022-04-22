import './Statistics.scss';
import 'antd/dist/antd.css';
import { Table, Tag, Space } from 'antd';

function Statistics(props) {
	// type Props = {
	//     some?: any,
	//     style?: string,
	// };
	const columns = [
		{
			title: 'All Salary',
			dataIndex: 'name',
			key: 'name',
			render: (text) => <a>{text}</a>,
		},
		{
			title: 'Number of working day',
			dataIndex: 'age',
			key: 'age',
		},
		{
			title: 'Total get',
			dataIndex: 'address',
			key: 'address',
		},
		{
			title: 'Total advances',
			dataIndex: 'address',
			key: 'address',
		},
		{
			title: 'Summary',
			dataIndex: 'address',
			key: 'address',
		},
	];

	const data = [
		{
			key: '1',
			name: 'John Brown',
			age: 32,
			address: 'New York No. 1 Lake Park',
			tags: ['nice', 'developer'],
		},
		{
			key: '2',
			name: 'Jim Green',
			age: 42,
			address: 'London No. 1 Lake Park',
			tags: ['loser'],
		},
		{
			key: '3',
			name: 'Joe Black',
			age: 32,
			address: 'Sidney No. 1 Lake Park',
			tags: ['cool', 'teacher'],
		},
	];
	return (
		<>
			<h1>STATISTICS</h1>
			<div className='statistics-container'>
				<Table columns={columns} dataSource={data} />
			</div>
		</>
	);
}

export default Statistics;
