import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Container } from '../Container';
import {
  logIn,
  register,
} from '../../redux/auth/authOperations';
import { validationsSchemaRegistrationEn } from './validationShema';
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
import { authSelectors } from '../../redux/auth';
import { createToast } from '../../functions';
import { useFormik } from 'formik';
import GoogleAuth from './GoogleAuth';

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const [showPassword, setShow] = useState(false);
  const isError = useSelector(authSelectors.getError);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationsSchemaRegistrationEn,
    onSubmit: values => {
      const { name, email, password } = values;
      dispatch(register({ name, email, password })).then(
        () => {
          dispatch(logIn({ email, password }));
        }
      );
    },
  });

  const changePassword = () => {
    setShow(prev => (prev = !prev));
  };

  useEffect(() => {
    if (isError) {
      createToast(
        'error',
        'This mail is already in use. Please, login!'
      );
      return;
    }
  }, [isError]);

  return (
    <Container>
      <Wrapper>
        <FormTitle>register</FormTitle>
        <AuthForm
          noValidate
          component="form"
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
          <FormFlexContainer>
            <MyInput
              fullWidth
              variant="standard"
              label="Name"
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
              variant="standard"
              label="Email"
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
              variant="standard"
              label="Password"
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
              variant="standard"
              label="Confirm password"
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
            <Button type="submit">Register</Button>
            <ButtonLink to="/login">Login</ButtonLink>
            <GoogleAuth />
          </BtnWrapp>
        </AuthForm>
      </Wrapper>
    </Container>
  );
}
