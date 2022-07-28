import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useFormik } from 'formik';
import GoogleAuth from './GoogleAuth';
import { useTranslation } from 'react-i18next';

import { Container } from '../Container';
import {
  logIn,
  register,
} from '../../redux/auth/authOperations';
import {
  validationsSchemaRegistrationEn,
  validationsSchemaRegistrationUA,
} from './validationShema';
import {
  Wrapper,
  FormTitle,
  FormFlexContainer,
  BtnWrapp,
  AuthForm,
  Button,
  ButtonLink,
  MyInput,
} from './forms.styled';
import { createToast } from '../../functions';
import '../../utils/i18next';
import { languageSelectors } from '../../redux/language';

export default function RegistrationForm() {
  const { t } = useTranslation();
  const lang = useSelector(languageSelectors.getLanguage);
  const dispatch = useDispatch();
  const [showPassword, setShow] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema:
      lang === 'en'
        ? validationsSchemaRegistrationEn
        : validationsSchemaRegistrationUA,
    onSubmit: values => {
      const { name, email, password } = values;
      dispatch(register({ name, email, password }))
        .unwrap()
        .then(() => {
          dispatch(logIn({ email, password }));
        })
        .catch(error => {
          if (error.status === 400) {
            return createToast(
              'error',
              `${t('auth.invalid')}`
            );
          }
          if (error.status === 409) {
            return createToast(
              'error',
              `${t('auth.alreadyUse')}`
            );
          }
        });
    },
  });

  const changePassword = () => {
    setShow(prev => (prev = !prev));
  };

  return (
    <Container>
      <Wrapper>
        <FormTitle>{t('auth.registerTitle')}</FormTitle>
        <AuthForm
          noValidate
          component="form"
          autoComplete="on"
          onSubmit={formik.handleSubmit}
        >
          <FormFlexContainer>
            <MyInput
              fullWidth
              autoComplete="off"
              variant="standard"
              label={t('auth.name')}
              id="name"
              value={formik.name}
              onChange={formik.handleChange}
              error={
                formik.touched.name &&
                Boolean(formik.errors.name)
              }
              helperText={
                formik.touched.name && formik.errors.name
              }
              required
            />
            <MyInput
              fullWidth
              autoComplete="off"
              variant="standard"
              label={t('auth.email')}
              id="email"
              value={formik.email}
              onChange={formik.handleChange}
              error={
                formik.touched.email &&
                Boolean(formik.errors.email)
              }
              helperText={
                formik.touched.email && formik.errors.email
              }
              required
            />
            <MyInput
              fullWidth
              autoComplete="off"
              variant="standard"
              label={t('auth.password')}
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={formik.password}
              onChange={formik.handleChange}
              error={
                formik.touched.password &&
                Boolean(formik.errors.password)
              }
              helperText={
                formik.touched.password &&
                formik.errors.password
              }
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={changePassword}
                      onMouseDown={e => {
                        e.preventDefault();
                      }}
                      edge="end"
                    >
                      {showPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <MyInput
              fullWidth
              autoComplete="off"
              variant="standard"
              label={t('auth.confirm')}
              id="confirmPassword"
              type={showPassword ? 'text' : 'password'}
              value={formik.confirmPassword}
              onChange={formik.handleChange}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword &&
                formik.errors.confirmPassword
              }
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={changePassword}
                      onMouseDown={e => {
                        e.preventDefault();
                      }}
                      edge="end"
                    >
                      {showPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </FormFlexContainer>
          <BtnWrapp>
            <Button type="submit">
              {t('auth.register')}
            </Button>
            <GoogleAuth />
            <ButtonLink to="/login">
              {t('auth.login')}
            </ButtonLink>
          </BtnWrapp>
        </AuthForm>
      </Wrapper>
    </Container>
  );
}
