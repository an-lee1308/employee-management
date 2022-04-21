import "./Container.scss"
import 'antd/dist/antd.css';
import { Input } from 'antd';

const { Search } = Input;
function Container() {
    type Props = {
        some?: any,
        style?: string,
    };
    const onSearch = (): any => {
        console.log("hello");

    }
    return (
        <>
            <div className="search-block">
                <div className="search-block__total-list">Total 6 employees</div>
                <div className="search-block__search-input">
                    <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
                </div>
            </div>
            <div className="container">
                <div className="container__search-result">Search result</div>
                <div className="container-table"></div>
            </div>
        </>
    );
}

export default Container;