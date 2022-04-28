import { useEffect, useState } from 'react';
import Container from '../../components/Container/Container';
import Table from '../../components/Table/Table';
import axios from 'axios';
export default function Home() {
	const [employeeList, setEmployeeList] = useState([]);
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get(
					'http://localhost:8080/api/employees/list'
				);
				console.log(response);
				setEmployeeList(response.data);
			} catch (error) {
				console.error(error);
			}
		}
		fetchData();
	}, []);

	const totalEmployees = employeeList.length;
	return (
		<div>
			<Container total={totalEmployees} />
			<Table employeeList={employeeList} />
		</div>
	);
}
