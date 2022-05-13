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
			// `http://localhost:8080/api/employees/${data}`
			`http://localhost:8080/api/employees/200`
		);
		console.log(response);
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
				<Link to={`/employee/${data.id}`}>
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
	employeeList.forEach(async (employee, index) => {
		await employeeRender.push({
			id: employee.employeeId,
			key: index + 1,
			fullname: employee.fullName,
			team: employee.teamInfo.name,
			phone: employee.phoneNumber,
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
