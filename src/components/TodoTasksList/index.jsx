import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TodoListContext } from 'context';

const TodoTasksList = props => {
  const { todoList } = props;
  console.log(todoList);
  return (
    <ul>
      {todoList.map((task, index) => (
        <li key={`${task.value}-${index}`}>{task.value}</li>
      ))}
    </ul>
  );
};

TodoTasksList.propTypes = {};

export default TodoTasksList;
