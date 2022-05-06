import { FaAddressCard } from 'react-icons/fa';
import 'antd/dist/antd.css';
import './Table.scss';
import { Table, Tag, Space } from 'antd';

function TableTeamList(props) {
	// type Props = {
	//     some?: any,
	//     style?: string,
	// };
	const columns = [
		{
			title: 'No',
			dataIndex: 'key',
			key: 'key',
		},
		{
			title: 'Name Team',
			dataIndex: 'nameteam',
			key: 'nameteam',
		},
		{
			title: 'Option',
			key: 'option',
			render: (piece) => (
				<Space size='middle'>
					<div
						onClick={() => console.log(piece.key)}
						// className='head_container__button head_container__button--add'
						// onClick={showModal}
					>
						<FaAddressCard />
					</div>
				</Space>
			),
		},
	];

	const data = [
		{
			key: '1',
			nameteam: `IT Support`,
			money: 32,
		},
		{
			key: Math.random(),
			nameteam: `HR execute`,
			money: 42,
		},
		{
			key: '3',
			nameteam: `Manager`,
			money: 32,
		},
	];
	return (
		<>
			<Table className='hiden-pagination' columns={columns} dataSource={data} />
		</>
	);
}

export default TableTeamList;
