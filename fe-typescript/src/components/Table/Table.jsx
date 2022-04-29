import React from 'react';
import 'antd/dist/antd.css';
import { FaTrashAlt, FaInfo } from 'react-icons/fa';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, Space } from 'antd';
import axios from 'axios';

const handleDeleteAnEmployee = async (data) => {
	console.log('log', data);
	if (window.confirm('Are you sure you want to delete') === true) {
		console.log(`cho phép gửi api xóa ${data}`);
		const response = await axios.delete(
			`http://localhost:8080/api/employees/${data}`
		);
	}
};

const columns = [
	{
		title: 'No',
		dataIndex: 'key',
	},
	{
		title: 'FullName',
		dataIndex: 'fullname',
	},
	{
		title: 'Phone',
		dataIndex: 'phone',
	},
	{
		title: 'Team',
		dataIndex: 'team',
	},
	{
		title: 'Option',
		key: 'id',
		// dataIndex: 'option',
		render: (data) => (
			<Space size='middle'>
				<Link to={`/employee-detail/${data.id}`}>
					<div
					// onClick={() => console.log(data.id)}
					// className='head_container__button head_container__button--add'
					// onClick={showModal}
					>
						<FaInfo style={{ color: 'blue', cursor: 'pointer' }} />
					</div>
				</Link>
				<div
					onClick={() => handleDeleteAnEmployee(data.id)}
					// className='head_container__button head_container__button--add'
					// onClick={showModal}
				>
					<FaTrashAlt style={{ cursor: 'pointer' }} />
				</div>
			</Space>
		),
	},
];

const rowSelection = {
	onChange: (selectedRowKeys, selectedRows) => {
		console.log(
			`selectedRowKeys: ${selectedRowKeys}`,
			'selectedRows: ',
			selectedRows
		);
	},
	// getCheckboxProps: (record) => ({
	// 	disabled: record.name === 'Disabled User',
	// 	// Column configuration not to be checked
	// 	name: record.name,
	// }),
};

const TableUI = (props) => {
	const employeeRender = [];
	console.log(employeeRender);
	const { employeeList } = props;
	employeeList.forEach((employee, index) => {
		// console.log(employee);
		// const employeeObject = {
		// 	no: index,
		// 	fullname: employee.fullName,
		// 	phone: employee.phoneNumber,
		// 	team: employee.teamID,
		// };
		// console.log('employee object', employeeObject);
		employeeRender.push({
			id: employee.id,
			key: index + 1,
			fullname: employee.fullName,
			phone: employee.phoneNumber,
			team: employee.team,
		});
	});

	return (
		<div>
			<Table
				rowSelection={rowSelection}
				columns={columns}
				dataSource={employeeRender}
				pagination={{
					defaultPageSize: 5,
				}}
			/>
		</div>
	);
};

export default TableUI;

// import { Table, Space } from 'antd';
// import { cursorTo } from 'readline';

// type Props = {
//     some?: any,
//     style?: string,
//     rowSelection?: any
// };

// const data = [];
// for (let i = 0; i < 46; i++) {
// 	data.push({
// 		key: i,
// 		no: `Edward King ${i}`,
// 		phone: 32,
// 		team: `London, Park Lane no. ${i}`,
// 		fullname: `London, Park Lane no. ${i}`,
// 	});
// }
// const columns = [
// 	{
// 		title: 'No',
// 		dataIndex: 'no',
// 	},
// 	{
// 		title: 'FullName',
// 		dataIndex: 'fullname',
// 	},
// 	{
// 		title: 'Phone',
// 		dataIndex: 'phone',
// 	},
// 	{
// 		title: 'Team',
// 		dataIndex: 'team',
// 	},
// 	{
// 		title: 'Option',
// 		key: 'option',
// 		// dataIndex: 'option',
// 		render: (data) => (
// 			<Space size='middle'>
// 				<div
// 					onClick={() => console.log(data)}
// 					// className='head_container__button head_container__button--add'
// 					// onClick={showModal}
// 				>
// 					<FaInfo style={{ color: 'blue', cursor: 'pointer' }} />
// 				</div>
// 				<div
// 					onClick={() => console.log(data)}
// 					// className='head_container__button head_container__button--add'
// 					// onClick={showModal}
// 				>
// 					<FaTrashAlt style={{ cursor: 'pointer' }} />
// 				</div>
// 			</Space>
// 		),
// 	},
// ];
// class TableUI extends React.Component {
// 	state = {
// 		selectedRowKeys: [], // Check here to configure the default column
// 		loading: false,
// 	};

// 	start = () => {
// 		this.setState({ loading: true });
// 		// ajax request after empty completing
// 		setTimeout(() => {
// 			this.setState({
// 				selectedRowKeys: [],
// 				loading: false,
// 			});
// 		}, 1000);
// 	};

// 	onSelectChange = (selectedRowKeys) => {
// 		console.log('selectedRowKeys changed: ', selectedRowKeys);
// 		this.setState({ selectedRowKeys });
// 	};

// 	render() {
// 		const { loading, selectedRowKeys } = this.state;
// 		const rowSelection = {
// 			any: selectedRowKeys,
// 			onChange: this.onSelectChange,
// 		};
// 		const hasSelected = selectedRowKeys.length > 0;
// 		return (
// 			<div>
// 				<div style={{ marginBottom: 16 }}>
// 					{/* <Button
//                         type="primary"
//                         onClick={this.start}
//                         disabled={!hasSelected}
//                         loading={loading}
//                     >
//                         Reload
//                     </Button> */}
// 					<span style={{ marginLeft: 8 }}>
// 						{hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
// 					</span>
// 				</div>
// 				<Table
// 					rowSelection={rowSelection}
// 					columns={columns}
// 					dataSource={data}
// 					pagination={{
// 						defaultPageSize: 5,
// 					}}
// 				/>
// 			</div>
// 		);
// 	}
// }
