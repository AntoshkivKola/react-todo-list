import React, {  } from 'react';
import PropTypes from 'prop-types';



const TodoTasksList = props => {
  const { todoList, setTodoList } = props;
 
  const handleChange = id => {
    return ({ target: { checked } }) => {
      const newTodoList = [...todoList];
      for (const task of newTodoList) {
        task.isDone = task.id === id ? checked : task.isDone;
      }

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
