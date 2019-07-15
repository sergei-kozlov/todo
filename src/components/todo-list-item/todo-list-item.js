import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({ label, important = true } ) => {

    const style = {
        color: important ? 'tomato' : 'black'
    };

    return (
        <span className="todo-list-item"
              style= { style }>
            { label }
            </span>)
};

<button type="button" className="btn btn-outline-succes btn-"></button>

export default TodoListItem;