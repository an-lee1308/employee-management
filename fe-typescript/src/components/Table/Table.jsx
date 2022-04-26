import React from 'react';
import 'antd/dist/antd.css';
import { FaTrashAlt, FaInfo } from 'react-icons/fa';
import { Table, Button, Space } from 'antd';
// import { cursorTo } from 'readline';

// type Props = {
//     some?: any,
//     style?: string,
//     rowSelection?: any
// };

const data = [];
for (let i = 0; i < 46; i++) {
	data.push({
		key: i,
		no: `Edward King ${i}`,
		phone: 32,
		team: `London, Park Lane no. ${i}`,
		fullname: `London, Park Lane no. ${i}`,
	});
}
const columns = [
	{
		title: 'No',
		dataIndex: 'no',
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
		key: 'option',
		// dataIndex: 'option',
		render: (data) => (
			<Space size='middle'>
				<div
					onClick={() => console.log(data)}
					// className='head_container__button head_container__button--add'
					// onClick={showModal}
				>
					<FaInfo style={{ color: 'blue', cursor: 'pointer' }} />
				</div>
				<div
					onClick={() => console.log(data)}
					// className='head_container__button head_container__button--add'
					// onClick={showModal}
				>
					<FaTrashAlt style={{ cursor: 'pointer' }} />
				</div>
			</Space>
		),
	},
];
class TableUI extends React.Component {
	state = {
		selectedRowKeys: [], // Check here to configure the default column
		loading: false,
	};

	start = () => {
		this.setState({ loading: true });
		// ajax request after empty completing
		setTimeout(() => {
			this.setState({
				selectedRowKeys: [],
				loading: false,
			});
		}, 1000);
	};

	onSelectChange = (selectedRowKeys) => {
		console.log('selectedRowKeys changed: ', selectedRowKeys);
		this.setState({ selectedRowKeys });
	};

	render() {
		const { loading, selectedRowKeys } = this.state;
		const rowSelection = {
			any: selectedRowKeys,
			onChange: this.onSelectChange,
		};
		const hasSelected = selectedRowKeys.length > 0;
		return (
			<div>
				<div style={{ marginBottom: 16 }}>
					{/* <Button
                        type="primary"
                        onClick={this.start}
                        disabled={!hasSelected}
                        loading={loading}
                    >
                        Reload
                    </Button> */}
					<span style={{ marginLeft: 8 }}>
						{hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
					</span>
				</div>
				<Table
					rowSelection={rowSelection}
					columns={columns}
					dataSource={data}
				/>
			</div>
		);
	}
}
export default TableUI;
