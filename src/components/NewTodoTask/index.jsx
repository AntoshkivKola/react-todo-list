import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form } from 'formik';
import { TODO_TASK_SCHEMA } from 'utils/validationSchemas';
import styles from './NewTodoTask.module.scss';

const initialValues = {
  newTask: '',
};

const NewTodoTask = props => {
  const { setTodoList, todoList } = props;
  const onSubmit = (values, formikBag) => {
    const newTask = {
      id: Date.now(),
      value: values.newTask,
      isDone: false,
    };
    const newtodoList = [...todoList];

    newtodoList.push(newTask);
    setTodoList(newtodoList);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={TODO_TASK_SCHEMA}
      onSubmit={onSubmit}
    >
      <Form className={styles.newTask}>
        <Field
          className={styles.input}
          name='newTask'
          placeholder='Enter new task'
        />
        <Field className={styles.add} name='submit' type='submit' value='+' />
      </Form>
    </Formik>
  );
};

NewTodoTask.propTypes = {
  setTodoList: PropTypes.func.isRequired,
  todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NewTodoTask;
