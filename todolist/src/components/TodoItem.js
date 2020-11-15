import React, {Component} from 'react';
import './TodoItem.css';
import checkItem from '../imgs/check.svg'; // import image
import checkItemComplete from '../imgs/check-complete.svg';
const classNames = require('classnames'); // install classNames : npm install classnames --save

class TodoItem extends Component {
    render() {
        const { item, onClick } = this.props;
        let className = classNames('TodoItem', { TodoItemComplete : item.isComplete });
        let url = checkItem;
        if (item.isComplete) {
            url = checkItemComplete;
        }
        return (
            <div className={className}>
                <img onClick={onClick} alt={url} src={url} />
                <p>{this.props.item.title}</p>
            </div>
        );     
    }
}

export default TodoItem;