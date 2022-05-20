import { useEffect, useState } from 'react';
import Container from '../../components/Container/Container';
import Table from '../../components/Table/Table';
import axios from 'axios';
import '../../components/Container/Container.scss';
import { Input, Spin } from 'antd';

const { Search } = Input;

export default function Home(props) {
	const { render, renderPage } = props;
	const onSearch = (e) => {
		if (e) {
			console.log(e);
			const value = e.toLowerCase();
			const filterData = employeeList.filter((employee) => {
				return employee.fullName.toLowerCase().includes(value);
			});
			setEmployeeList(filterData);
		} else setEmployeeList(data);
		e = '';
	};
	const [employeeList, setEmployeeList] = useState([]);
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	console.log('re-render');
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get(
					'http://localhost:8080/api/employees/list'
				);
				console.log(response);
				setEmployeeList(response.data);
				setData(response.data);
				setIsLoading(false);
			} catch (error) {
				console.error(error);
			}
		}
		fetchData();
	}, [render]);

	const totalEmployees = employeeList.length;
	return (
		<div>
			{isLoading ? (
				<div style={{ marginLeft: '28vmax' }}>
					<Spin tip='Loading...' />
				</div>
			) : (
				<div>
					<div className='search-block'>
						<div className='search-block__total-list'>
							Total {totalEmployees} employees
						</div>
						<div className='search-block__search-input'>
							<Search
								placeholder='input search text'
								onSearch={onSearch}
								style={{ width: 200 }}
							/>
						</div>
					</div>
					<div className='container'>
						<div className='container__search-result'>Search result</div>
						<div className='container-table'></div>
					</div>
					{employeeList && employeeList.length > 0 && (
						<Table renderPage={renderPage} employeeList={employeeList} />
					)}
				</div>
			)}
		</div>
	);
}
