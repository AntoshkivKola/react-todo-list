import * as Yup from 'yup';

export const TODO_TASK_SCHEMA = Yup.object({
  newTask: Yup.string()
    .matches(/^[0-9]||[A-Z]||[a-z].{2,}$/, '2 letters or more')
    .required(),
});
