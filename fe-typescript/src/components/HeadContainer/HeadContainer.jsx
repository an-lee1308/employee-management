import { FaPlusCircle, FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import 'antd/dist/antd.css';
import { Button, Modal } from 'antd';
import "./HeadContainer.scss"
function HeadContainer() {
    // type Props = {
    //     some?: any,
    //     style?: string,
    //     Modal?: any
    // };
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <>
            <div className="head_container">
                <div className="head_container__title">Employee</div>
                <div className="head_container__button">
                    <div className="head_container__button head_container__button--add" onClick={showModal}><FaPlusCircle /> </div>
                    <div className="head_container__button head_container__button--delete"><FaTrashAlt /> </div>
                </div>
            </div>
            <Modal title="Add new Employee" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <form>
                <div className="group-input">
                    <input placeholder="Full name employee" type="text"/><span className="highlight"></span><span className="bar"></span>
                    {/* <label>Full name employee</label> */}
                </div>
               <div className="group-container">
                <div className="group-input">
                    <input placeholder="Address*" type="text"/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    {/* <label>Address*</label> */}
                </div>
                <div className="group-input">
                    <input placeholder="Sex employee*" type="text"/><span className="highlight"></span><span className="bar"></span>
                    {/* <label>Sex employee*</label> */}
                </div>
                </div>
                <div className="group-container">
                <div className="group-input">
                    <input placeholder="Age employee*" type="text"/><span className="highlight"></span><span className="bar"></span>
                    {/* <label>Age employee*</label> */}
                </div>
                <div className="group-input">
                    <input placeholder="Start day*" type="date"/><span className="highlight"></span><span className="bar"></span>
                    {/* <label>Start day*</label> */}
                </div>
                </div>
                <div className="group-container">
                <div className="group-input">
                    <input placeholder="Money/hour*" type="text"/><span className="highlight"></span><span className="bar"></span>
                    {/* <label>Money/hour*</label> */}
                </div>
                <div className="group-input">
                    <input placeholder="Phone number*" type="text"/><span className="highlight"></span><span className="bar"></span>
                    {/* <label>Phone number*</label> */}
                </div>
                </div>
                </form>
            </Modal>
        </>
    );
}

export default HeadContainer;