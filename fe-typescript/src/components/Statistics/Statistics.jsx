import './Statistics.scss';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';

function Statistics(props) {
	// type Props = {
	//     some?: any,
	//     style?: string,
	// };
	console.log('stgatics', props.statistics);
	const { employeeId, fullName, moneyPerHour, workingInfo, advancesInfo } =
		props.statistics;
	console.log(moneyPerHour, workingInfo);
	const allMoney = (moneyPerHour, workingInfo) => {
		console.log(workingInfo);
		let totalHours = workingInfo.reduce((prev, curr) => {
			return prev + curr.hour;
		}, 0);
		return totalHours * moneyPerHour;
	};
	const numberOfWorkingDay = (workingInfo) => {
		return workingInfo.length;
	};
	const totalGet = () => {};

	const totalAdvances = (advancesInfo) => {
		console.log(advancesInfo);
		let totalAdvances = advancesInfo.reduce((prev, curr) => {
			return prev + curr.money;
		}, 0);
		return totalAdvances;
	};
	const Sumary = () => {};

	return (
		<>
			<h1>STATISTICS</h1>
			<div className='info-container'>
				<Row gutter={24}>
					<Col className='gutter-row' span={24}>
						<div className='info-box'>
							All money {allMoney(moneyPerHour, workingInfo)}$
						</div>
					</Col>
				</Row>
				<Row gutter={24}>
					<Col className='gutter-row' span={24}>
						<div className='info-box'>
							Number of working day {numberOfWorkingDay(workingInfo)}
						</div>
					</Col>
				</Row>
				<Row gutter={24}>
					<Col className='gutter-row' span={24}>
						<div className='info-box'>Total get</div>
					</Col>
				</Row>
				<Row gutter={24}>
					<Col className='gutter-row' span={24}>
						<div className='info-box'>
							Total advances {totalAdvances(advancesInfo)}
						</div>
					</Col>
				</Row>
				<Row gutter={24}>
					<Col className='gutter-row' span={24}>
						<div className='info-box'>Sumary</div>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default Statistics;
