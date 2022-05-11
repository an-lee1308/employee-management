import { FaPlusCircle, FaTrashAlt } from 'react-icons/fa';
import './Advances.scss';
import 'antd/dist/antd.css';
import { Table, Tag, Space } from 'antd';
import moment from 'moment';

const handleOnClick = () => {
	console.log('hello');
};

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
		title: 'Money',
		dataIndex: 'money',
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

function Advances(props) {
	// type Props = {
	//     some?: any,
	//     style?: string,
	// };
	const { advancesInfo } = props.advances;
	console.log(advancesInfo);

	const advancesRender = [];
	console.log(advancesRender);
	advancesInfo.forEach((advance, index) => {
		// console.log(employee);
		// const employeeObject = {
		// 	no: index,
		// 	fullname: employee.fullName,
		// 	phone: employee.phoneNumber,
		// 	team: employee.teamID,
		// };
		// console.log('employee object', employeeObject);
		advancesRender.push({
			id: advance.advancesId,
			no: index + 1,
			key: index + 1,
			date: moment(advance.date).utc().format('DD/MM/YYYY'),
			money: advance.money,
		});
	});
	console.log('log', advancesRender);
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
					onClick={handleOnClick}
				>
					<FaPlusCircle />
				</div>
			</div>
			<div className='advances-container'>
				<Table columns={columns} dataSource={advancesRender} />
			</div>
		</>
	);
}

export default Advances;
