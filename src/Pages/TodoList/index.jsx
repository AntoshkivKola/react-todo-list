import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TodoList.module.scss';
import NewTodoTask from 'components/NewTodoTask';
import TodoTasksList from 'components/TodoTasksList';
import { TodoListContext } from 'context';

// import { todoList } from 'todoList';

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  //const todoList = useContext(TodoListContext);

  return (
    <TodoListContext.Provider value={todoList}>
      <div>
        <NewTodoTask todoList={todoList}  setTodoList={setTodoList}/>

        <TodoTasksList todoList={todoList} setTodoList={setTodoList} />
      </div>
    </TodoListContext.Provider>
  );
};

TodoList.propTypes = {};

export default TodoList;
