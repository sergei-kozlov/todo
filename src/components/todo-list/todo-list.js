import React from 'react';
import TodoLIstItem from '../todo-list-item/todo-list-item';
import './todo-list.css';


const TodoList = ({ todos }) => {

    const elements = todos.map((item) => {

        const { id, ...itemProps } = item;

        return (
            <li key={item.id} className="list-group-item">
                <TodoLIstItem {...itemProps}/>
            </li>
        );

    });

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;