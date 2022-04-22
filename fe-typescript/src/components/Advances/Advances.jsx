import './Advances.scss';
import 'antd/dist/antd.css';
import { Table, Tag, Space } from 'antd';

function Advances(props) {
	// type Props = {
	//     some?: any,
	//     style?: string,
	// };
	const columns = [
		{
			title: 'No',
			dataIndex: 'name',
			key: 'name',
			render: (text) => <a>{text}</a>,
		},
		{
			title: 'Date',
			dataIndex: 'age',
			key: 'age',
		},
		{
			title: 'Money',
			dataIndex: 'address',
			key: 'address',
		},
		{
			title: 'Tags',
			key: 'tags',
			dataIndex: 'tags',
			render: (tags) => (
				<>
					{tags.map((tag) => {
						let color = tag.length > 5 ? 'geekblue' : 'green';
						if (tag === 'loser') {
							color = 'volcano';
						}
						return (
							<Tag color={color} key={tag}>
								{tag.toUpperCase()}
							</Tag>
						);
					})}
				</>
			),
		},
		{
			title: 'Option',
			key: 'action',
			render: (text, record) => (
				<Space size='middle'>
					<a>Invite {record.name}</a>
					<a>Delete</a>
				</Space>
			),
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
			<h1>ADVANCES</h1>
			<div className='advances-container'>
				<Table columns={columns} dataSource={data} />
			</div>
		</>
	);
}

export default Advances;
