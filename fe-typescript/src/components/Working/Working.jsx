import './Working.scss';
import 'antd/dist/antd.css';
import { FaPlusCircle, FaTrashAlt } from 'react-icons/fa';
import { Table, Tag, Space } from 'antd';

function Working(props) {
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
			title: 'Hour',
			dataIndex: 'hour',
			key: 'hour',
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
			hour: 32,
		},
		{
			key: Math.random(),
			date: Date.now(),
			hour: 42,
		},
		{
			key: '3',
			date: Date.now(),
			hour: 32,
		},
		{
			key: Math.random(),
			date: Date.now(),
			hour: 42,
		},
		{
			key: Math.random(),
			date: Date.now(),
			hour: 42,
		},
		{
			key: Math.random(),
			date: Date.now(),
			hour: 42,
		},
		{
			key: Math.random(),
			date: Date.now(),
			hour: 42,
		},
		{
			key: Math.random(),
			date: Date.now(),
			hour: 42,
		},
		{
			key: Math.random(),
			date: Date.now(),
			hour: 42,
		},
		{
			key: Math.random(),
			date: Date.now(),
			hour: 42,
		},
		{
			key: Math.random(),
			date: Date.now(),
			hour: 42,
		},
		{
			key: Math.random(),
			date: Date.now(),
			hour: 42,
		},
		{
			key: Math.random(),
			date: Date.now(),
			hour: 42,
		},
		{
			key: Math.random() * 10,
			date: Date.now(),
			hour: 42,
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
			<div className='working-container'>
				<Table columns={columns} dataSource={data} />
			</div>
		</>
	);
}

export default Working;
