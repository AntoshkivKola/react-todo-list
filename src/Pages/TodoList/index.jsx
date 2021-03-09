import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './TodoList.module.scss';
import NewTodoTask from 'components/NewTodoTask';
import TodoTasksList from 'components/TodoTasksList';
import { TodoListContext } from 'context';
import { tasks } from 'tasks';

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  return (
    <TodoListContext.Provider value={todoList}>
      <div className={styles.main}>
        <div className={styles.container}>
          <NewTodoTask todoList={todoList} setTodoList={setTodoList} />
          <TodoTasksList todoList={todoList} setTodoList={setTodoList} />
        </div>
      </div>
    </TodoListContext.Provider>
  );
};

TodoList.propTypes = {};

export default TodoList;
