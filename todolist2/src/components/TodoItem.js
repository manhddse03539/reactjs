import React from 'react';
import './TodoItem.css';
import Edit from '../imgs/edit.svg';
import Check from '../imgs/check.svg';
import CheckComplete from '../imgs/check-complete.svg';
import Trash from '../imgs/trash.svg';
const classNames = require('classnames');

const TodoItem = (props) => {
    const {item, checkTask, deleteTask, editTask} = props;
    return (
        <div className={classNames("Item", {ItemComplete : item.isComplete})}>
            <p>{item.Title}</p>
            <img onClick={editTask} alt="" src={Edit} />
            <img onClick={checkTask} alt="" src={item.isComplete ? CheckComplete : Check} />
            <img onClick={deleteTask} alt="" src={Trash} />
        </div>
    );
}

export default TodoItem;