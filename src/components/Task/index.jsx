import React from 'react';
import PropTypes from 'prop-types';
import styles from './Task.module.scss';
import cx from 'classnames';

const Task = props => {
  const {id, task, todoList, setTodoList } = props;

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
    <li className={styles.task} key={id}>
      <div>
        <input
          type='checkbox'
          name='isDone'
          value={task.id}
          checked={task.isDone}
          onChange={handleChange(task.id)}
          className={styles.isDone}
        />
        <span className={cx({ [styles.isDone]: task.isDone })}>
          {task.value}
        </span>
      </div>
      <button className={styles.removeTask} onClick={handleClick(task.id)}>
        x
      </button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  task: PropTypes.object.isRequired,
  setTodoList: PropTypes.func.isRequired,
  todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Task;
