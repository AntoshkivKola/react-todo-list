import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoTasksList.module.scss';
import cx from 'classnames';
import Task from 'components/Task';

const TodoTasksList = props => {
  const { todoList, setTodoList } = props;

  const changeIsDone = (index, checked) => {
    const newTodoList = [...todoList];
    newTodoList[index].isDone = checked;
    
    setTodoList(newTodoList);
  };

  const removeTask = index => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);

    setTodoList(newTodoList);
  };

  const classNamesTaskList = cx(styles.taskList, {
    [styles.isEmpty]: !Boolean(todoList.length),
  });

  return (
    <ul className={classNamesTaskList}>
      {todoList.map((task, index) => (
        <Task
          index={index}
          task={task}
          changeIsDone={changeIsDone}
          removeTask={removeTask}
          key={task.id}
        />
      ))}
    </ul>
  );
};

TodoTasksList.propTypes = {
  setTodoList: PropTypes.func.isRequired,
  todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default TodoTasksList;
