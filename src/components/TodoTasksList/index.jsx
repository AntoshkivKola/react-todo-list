import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoTasksList.module.scss';
import cx from 'classnames';
import Task from 'components/Task';

const TodoTasksList = props => {
  const { todoList, setTodoList } = props;

  const classNamesTaskList = cx(styles.taskList, {
    [styles.isEmpty]: !Boolean(todoList.length),
  });

  return (
    <ul className={classNamesTaskList} >
      {todoList.map((task) => (
         <Task task={task} todoList={todoList} setTodoList={setTodoList} key={task.id}/>
      ))}
    </ul>
  );
};

TodoTasksList.propTypes = {
  setTodoList: PropTypes.func.isRequired,
  todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default TodoTasksList;
