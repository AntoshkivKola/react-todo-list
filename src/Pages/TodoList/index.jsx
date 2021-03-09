import React, { useState } from 'react';
import styles from './TodoList.module.scss';
import NewTodoTask from 'components/NewTodoTask';
import TodoTasksList from 'components/TodoTasksList';
import { TodoListContext } from 'context';

const TodoList = props => {
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

export default TodoList;
