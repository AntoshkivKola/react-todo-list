import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TodoListContext } from 'context';
import { Formik, Field, Form } from 'formik';

const TodoTasksList = props => {
  const { todoList, setTodoList } = props;
  console.log(todoList);

  const handleChange = id => {
    return ({ target: { checked } }) => {
      const newTodoList = [...todoList];
      for (const task of newTodoList) {
        task.isDone = task.id === id ? checked : task.isDone;
      }

      //const changetTask = newTodoList.filter(todo => todo.id === id).isDone === checked;

      setTodoList(newTodoList);
    };
  };

  const handleClick = id => {
    return () => {
      const newTodoList = [...todoList].filter(todo => todo.id !== id);

      setTodoList(newTodoList);
    };
  };
  return (
    <ul>
      {todoList.map((task, index) => (
        <li key={`${task.value}-${index}`}>
          <input
            type='checkbox'
            name='isDone'
            value={index}
            checked={task.isDone}
            onChange={handleChange(task.id)}
          />
          {task.value}
          <button onClick={handleClick(task.id)}>x</button>
        </li>
      ))}
    </ul>
  );
};

TodoTasksList.propTypes = {};

export default TodoTasksList;
