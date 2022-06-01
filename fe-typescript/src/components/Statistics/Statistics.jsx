import './Statistics.scss';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';

function Statistics(props) {
	// type Props = {
	//     some?: any,
	//     style?: string,
	// };
	//console.log('stgatics', props.statistics);
	const { employeeId, fullName, moneyPerHour, workingInfo, advancesInfo } =
		props.statistics;
	//console.log(moneyPerHour, workingInfo);
	const totalGet = (moneyPerHour, workingInfo) => {
		//console.log(workingInfo);
		let totalHours = workingInfo.reduce((prev, curr) => {
			return prev + curr.hour;
		}, 0);
		return totalHours * moneyPerHour;
	};
	const numberOfWorkingDay = (workingInfo) => {
		return workingInfo.length;
	};

	const totalAdvances = (advancesInfo) => {
		//console.log(advancesInfo);
		let totalAdvances = advancesInfo.reduce((prev, curr) => {
			return prev + curr.money;
		}, 0);
		return totalAdvances;
	};
	const Sumary = () => {
		return totalGet(moneyPerHour, workingInfo) - totalAdvances(advancesInfo);
	};

	return (
		<>
			<h1>STATISTICS</h1>
			<div className='info-container'>
				<Row gutter={24}>
					<Col className='gutter-row' span={24}>
						<div className='info-box' style={{ backgroundColor: '#c1f1c1' }}>
							Number of working day : {numberOfWorkingDay(workingInfo)}
						</div>
					</Col>
				</Row>
				<Row gutter={24}>
					<Col className='gutter-row' span={24}>
						<div className='info-box' style={{ backgroundColor: 'white' }}>
							Total get : {totalGet(moneyPerHour, workingInfo)}$
						</div>
					</Col>
				</Row>
				<Row gutter={24}>
					<Col className='gutter-row' span={24}>
						<div className='info-box' style={{ backgroundColor: '#bbbbf5' }}>
							Total advances : {totalAdvances(advancesInfo)}
						</div>
					</Col>
				</Row>
				<Row gutter={24}>
					<Col className='gutter-row' span={24}>
						<div className='info-box' style={{ backgroundColor: '#e7b6b6' }}>
							Sumary : {Sumary()}$
						</div>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default Statistics;
