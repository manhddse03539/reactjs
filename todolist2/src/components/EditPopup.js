import React from 'react';
import Modal from 'react-modal';
import './EditPopup.css';
import Close from '../imgs/close.svg';

const Popup = (props) => {
    Modal.setAppElement('body');
    const {modalIsOpen, closePopup, taskID, taskNameToUpdate, descriptionToUpdate
    , getUpdateTaskName, getUpdateDescription, updateTaskInfo} = props;
    return (
        <Modal isOpen={modalIsOpen} className="EditPopup">
            <img onClick={closePopup} alt="" src={Close} />
            <h2 className="Title">Edit Task Information</h2>
            <input value={taskID} readOnly="readOnly" hidden="hidden" />
            <div className="TaskName">
                <label>Task name :&nbsp;</label>
                <input value={taskNameToUpdate} onChange={getUpdateTaskName}></input>
            </div> 
            <div className="Description">
                <label>Description :&nbsp;</label>
                <textarea value={descriptionToUpdate} onChange={getUpdateDescription}></textarea>
            </div>
            <div className="Confirm">
                <p>Do you want to update this task ?</p>
                <div className="Confirm-btn">
                    <button onClick={updateTaskInfo} className="Update-btn">Update</button>
                    <button onClick={closePopup} className="Cancel-btn">Cancel</button>
                </div>
            </div>   
        </Modal>
    );
}

export default Popup;