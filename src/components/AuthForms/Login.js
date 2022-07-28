import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GoogleAuth from './GoogleAuth';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';

import { logIn } from '../../redux/auth/authOperations';
import { Container } from '../Container';
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
import {
  validationsSchemaSignInEn,
  validationsSchemaSignInUA,
} from './validationShema';
import { createToast } from '../../functions';
import '../../utils/i18next';
import { languageSelectors } from '../../redux/language';

export default function Login(props) {
  const { t } = useTranslation();
  const lang = useSelector(languageSelectors.getLanguage);
  const dispatch = useDispatch();
  const [showPassword, setShow] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema:
      lang === 'en'
        ? validationsSchemaSignInEn
        : validationsSchemaSignInUA,
    onSubmit: values => {
      const { email, password } = values;
      dispatch(logIn({ email, password }))
        .unwrap()
        .catch(error => {
          if (error) {
            return createToast(
              'error',
              `${t('auth.credentials')}`
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
        <FormTitle>{t('auth.signTitle')}</FormTitle>
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
          </FormFlexContainer>
          <BtnWrapp>
            <Button type="submit">{t('auth.login')}</Button>
            <GoogleAuth />
            <ButtonLink to="/register">
              {t('auth.register')}
            </ButtonLink>
          </BtnWrapp>
        </AuthForm>
      </Wrapper>
    </Container>
  );
}
