import { FaPlusCircle, FaTrashAlt } from 'react-icons/fa';
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
			dataIndex: 'key',
			key: 'key',
		},
		{
			title: 'Date',
			dataIndex: 'date',
			key: 'date',
		},
		{
			title: 'Money',
			dataIndex: 'money',
			key: 'money',
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
						<FaTrashAlt />
					</div>
				</Space>
			),
		},
	];

	const data = [
		{
			key: '1',
			date: Date.now(),
			money: 32,
		},
		{
			key: Math.random(),
			date: Date.now(),
			money: 42,
		},
		{
			key: '3',
			date: Date.now(),
			money: 32,
		},
	];
	return (
		<>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<h1>ADVANCES</h1>
				<div
					style={{ fontSize: '2em' }}
					// className='head_container__button head_container__button--add'
					// onClick={showModal}
				>
					<FaPlusCircle />
				</div>
			</div>
			<div className='advances-container'>
				<Table columns={columns} dataSource={data} />
			</div>
		</>
	);
}

export default Advances;
