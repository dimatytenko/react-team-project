import * as yup from 'yup';

export const validationsSchemaRegistrationEn = yup
  .object()
  .shape({
    name: yup
      .string()
      .min(3)
      .max(60)
      .typeError()
      .required(),

    email: yup.string().email().required(),

    password: yup
      .string()
      .min(8)
      .max(32)
      .typeError()
      .required(),
  });

export const validationsSchemaSignInEn = yup
  .object()
  .shape({
    email: yup.string().email().required(),

    password: yup
      .string()
      .min(8)
      .max(32)
      .typeError()
      .required(),
  });

export const validationsSchemaRegistrationUA = yup
  .object()
  .shape({
    name: yup
      .string()
      .min(3, 'Мінімум 3 символи')
      .max(60, 'Максимум 60 символів')
      .typeError('Має бути рядком')
      .required("Обов'язкове поле"),

    email: yup
      .string()
      .email('Введіть вірний email')
      .required("Обов'язкове поле"),

    password: yup
      .string()
      .min(8, 'Мінімум 8 символи')
      .max(32, 'Максимум 32 символі')
      .typeError('Має бути рядкомй')
      .required("Обов'язкове поле"),
  });

export const validationsSchemaSignInUA = yup
  .object()
  .shape({
    email: yup
      .string()
      .email('Введіть вірний email')
      .required("Обов'язкове поле"),

    password: yup
      .string()
      .min(8, 'Мінімум 8 символи')
      .max(32, 'Максимум 32 символі')
      .typeError('Має бути рядкомй')
      .required("Обов'язкове поле"),
  });
