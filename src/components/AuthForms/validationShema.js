import * as yup from 'yup';

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const passwordRegExp =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?!.*\W).*$/;

export const validationsSchemaRegistrationEn = yup
  .object()
  .shape({
    name: yup
      .string()
      .min(3)
      .max(60)
      .typeError()
      .required(),

    email: yup
      .string()
      .email()
      .required()
      .matches(emailRegExp, 'Email must be like: *@*.**'),

    password: yup
      .string()
      .min(8)
      .max(32)
      .typeError()
      .required()
      .matches(
        passwordRegExp,
        'Password must contain only Latin letters at least 8 characters, one uppercase, one number'
      ),

    confirmPassword: yup
      .string()
      .required('Please confirm your password')
      .oneOf(
        [yup.ref('password'), null],
        "Passwords don't match."
      ),
  });

export const validationsSchemaSignInEn = yup
  .object()
  .shape({
    email: yup
      .string()
      .email()
      .required()
      .matches(emailRegExp, 'Email must be like: *@*.**'),

    password: yup
      .string()
      .min(8)
      .max(32)
      .typeError()
      .required()
      .matches(
        passwordRegExp,
        'Password must contain only Latin letters at least 8 characters, one uppercase, one number'
      ),
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
      .required("Обов'язкове поле")
      .matches(
        passwordRegExp,
        'Пароль має містити лише латинські літери, не менше 8 символів, одна велика літера, одна цифра'
      ),

    confirmPassword: yup
      .string()
      .required("Обов'язкове поле")
      .oneOf(
        [yup.ref('password'), null],
        'Паролі не збігаються'
      ),
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
      .required("Обов'язкове поле")
      .matches(
        passwordRegExp,
        'Пароль має містити лише латинські літери, не менше 8 символів, одна велика літера, одна цифра'
      ),
  });
