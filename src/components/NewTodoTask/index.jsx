import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form } from 'formik';
import { TODO_TASK_SCHEMA } from 'utils/validationSchemas';
import { TodoListContext } from 'context';

const initialValues = {
  newTask: '',
};

const NewTodoTask = props => {
  //const todoList = useContext(TodoListContext);
  const {setTodoList,todoList} = props;
  const onSubmit = (values, formikBag) => {
    const newTask = {
      value: values.newTask,
      isDone: false,
    };
    const newtodoList = [...todoList];

    newtodoList.push(newTask);
    setTodoList(newtodoList);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={TODO_TASK_SCHEMA}
      onSubmit={onSubmit}
    >
      <Form>
        <Field name='newTask' />
        <Field name='submit' type='submit' />
      </Form>
    </Formik>
  );
};

NewTodoTask.propTypes = {};

export default NewTodoTask;
