import React from 'react';
import PropTypes from 'prop-types';
import styles from './Task.module.scss';
import cx from 'classnames';

const Task = props => {
  const { index, task, changeIsDone, removeTask } = props;

  const handleChange = ({ target: { checked } }) => {
    changeIsDone(index, checked);
  };

  const handleClick = () => {
    removeTask(index);
  };

  return (
    <li className={styles.task}>
      <div>
        <input
          type='checkbox'
          name='isDone'
          value={task.id}
          checked={task.isDone}
          onChange={handleChange}
          className={styles.isDone}
        />
        <span className={cx({ [styles.isDone]: task.isDone })}>
          {task.value}
        </span>
      </div>
      <button className={styles.removeTask} onClick={handleClick}>
        x
      </button>
    </li>
  );
};

Task.propTypes = {
  index: PropTypes.number.isRequired,
  task: PropTypes.object.isRequired,
  changeIsDone: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
};

export default Task;
