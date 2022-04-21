import React from 'react';
import 'antd/dist/antd.css';
import { Table, Button, Tag } from 'antd';


type Props = {
    some?: any,
    style?: string,
    rowSelection?: any
};

const data: any = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}
const columns = [{
    title: 'No',
    dataIndex: 'name',
}, {
    title: 'FullName',
    dataIndex: 'age',
}, {
    title: 'Phone',
    dataIndex: 'address',
}
    , {
    title: 'Team',
    dataIndex: 'address',
}
    , {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: () => <a>Delete</a>,
},];
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
    }

    onSelectChange = (selectedRowKeys: any) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    }

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
                    <Button
                        type="primary"
                        onClick={this.start}
                        disabled={!hasSelected}
                        loading={loading}
                    >
                        Reload
                    </Button>
                    <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                    </span>
                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
            </div>
        );
    }
}
export default TableUI;