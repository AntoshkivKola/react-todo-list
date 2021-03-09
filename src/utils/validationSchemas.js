import * as Yup from 'yup';

export const TODO_TASK_SCHEMA = Yup.object({
  newTask: Yup.string()
    .matches(/^[a-z].{2,}$/, '2 letters or more')
    .required(),
});
