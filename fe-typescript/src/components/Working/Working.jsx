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
					onClick={() => console.log(piece.id)}
					// className='head_container__button head_container__button--add'
					// onClick={showModal}
				>
					<FaTrashAlt />
				</div>
			</Space>
		),
	},
];
const handleOnClick = () => {
	console.log('hello');
};
function Working(props) {
	const { workingInfo } = props.working;
	console.log(workingInfo);

	const workingRender = [];
	console.log(workingRender);
	workingInfo.forEach((working, index) => {
		// console.log(employee);
		// const employeeObject = {
		// 	no: index,
		// 	fullname: employee.fullName,
		// 	phone: employee.phoneNumber,
		// 	team: employee.teamID,
		// };
		// console.log('employee object', employeeObject);
		workingRender.push({
			id: working.workingId,
			no: index + 1,
			key: index + 1,
			date: moment(working.date).utc().format('DD/MM/YYYY'),
			hour: working.hour,
		});
	});
	console.log(workingRender);
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
					onClick={handleOnClick}
				>
					<FaPlusCircle />
				</div>
			</div>
			<div className='working-container'>
				<Table columns={columns} dataSource={workingRender} />
			</div>
		</>
	);
}

export default Working;
