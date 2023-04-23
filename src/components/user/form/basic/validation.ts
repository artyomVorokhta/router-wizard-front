import * as yup from 'yup';

export const getValidationSchema = () =>
  yup.object().shape({
    name: yup.string().required('Введите Ф. И. О. пользователя'),
    email: yup.string().required('Введите email'),
    phone: yup.string().nullable(),
    role: yup.string().required('Выберите роль'),
  });
