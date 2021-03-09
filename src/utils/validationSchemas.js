import * as Yup from 'yup'

export const TODO_TASK_SCHEMA = Yup.string()
  .matches(/^[a-z].{2,}$/)
  .required()
