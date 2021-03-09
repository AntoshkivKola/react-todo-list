import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TodoListContext } from 'context';
import { Formik, Field, Form } from 'formik';

const TodoTasksList = props => {
  const { todoList,setTodoList } = props;
  console.log(todoList);

  const handleChange = (index) => {

    return ({target:{checked}})=>{
      const newTodoList = [...todoList];
      newTodoList[index].isDone = checked;

      setTodoList(newTodoList);
    }
    
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
            onChange={handleChange(index)}
          />
          {task.value}
        </li>
      ))}
    </ul>
  );
};

TodoTasksList.propTypes = {};

export default TodoTasksList;
