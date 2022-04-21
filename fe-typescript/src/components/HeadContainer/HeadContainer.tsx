import { FaPlusCircle, FaTrashAlt } from "react-icons/fa";
import "./HeadContainer.scss"
function HeadContainer() {
    type Props = {
        some?: any,
        style?: string,
    };
    return (
        <>
            <div className="head_container">
                <div className="head_container__title">Employee</div>
                <div className="head_container__button">
                    <div className="head_container__button head_container__button--add"><FaPlusCircle /> </div>
                    <div className="head_container__button head_container__button--delete"><FaTrashAlt /> </div>
                </div>
            </div>
        </>
    );
}

export default HeadContainer;