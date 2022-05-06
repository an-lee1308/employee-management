import './Working.scss';
import 'antd/dist/antd.css';
import { FaPlusCircle, FaTrashAlt } from 'react-icons/fa';
import { Table, Space } from 'antd';
import moment from 'moment';

const columns = [
	{
		title: 'No',
		dataIndex: 'no',
	},
	{
		title: 'Date',
		dataIndex: 'date',
	},
	{
		title: 'Hour',
		dataIndex: 'hour',
	},
	{
		title: 'Option',
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

function Working(props) {
	// type Props = {
	//     some?: any,
	//     style?: string,
	// };
	console.log(props.working);
	const no = props.working;

	// const employeeRender = [];
	// console.log(employeeRender);
	// no.forEach((employee, index) => {
	// 	// console.log(employee);
	// 	// const employeeObject = {
	// 	// 	no: index,
	// 	// 	fullname: employee.fullName,
	// 	// 	phone: employee.phoneNumber,
	// 	// 	team: employee.teamID,
	// 	// };
	// 	// console.log('employee object', employeeObject);
	// 	employeeRender.push({
	// 		no: employee.id,
	// 		key: index + 1,
	// 		date: Date.now(),
	// 		hour: 8,
	// 	});
	// });

	const data = [
		{
			no: 1,
			key: '1',
			date: moment(Date.now()).utc().format('DD/MM/YYYY'),
			hour: 32,
		},
		{
			no: 2,
			key: Math.random(),
			date: moment(Date.now()).utc().format('DD/MM/YYYY'),
			hour: 42,
		},
		{
			no: 3,
			key: '3',
			date: moment(Date.now()).utc().format('DD/MM/YYYY'),
			hour: 32,
		},
		{
			no: Math.random(),
			key: Math.random(),
			date: moment(Date.now()).utc().format('DD/MM/YYYY'),
			hour: 42,
		},
		{
			no: Math.random(),
			key: Math.random(),
			date: moment(Date.now()).utc().format('DD/MM/YYYY'),
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
				<h1>WORKING</h1>
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
