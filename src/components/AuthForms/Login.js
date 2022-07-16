import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { validationsSchemaSignInEn } from './validationShema';
import { useFormik } from 'formik';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { authSelectors } from '../../redux/auth';
import { createToast } from '../../functions';
import GoogleAuth from './GoogleAuth';

export default function Login(props) {
  const dispatch = useDispatch();
  const [showPassword, setShow] = useState(false);
  const isError = useSelector(authSelectors.getError);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationsSchemaSignInEn,
    onSubmit: values => {
      const { email, password } = values;
      dispatch(logIn({ email, password }));
    },
  });

  const changePassword = () => {
    setShow(prev => (prev = !prev));
  };

  useEffect(() => {
    if (isError) {
      createToast('error', 'Incorrect credentials!');
      return;
    }
  }, [isError]);

  return (
    <Container>
      <Wrapper>
        <FormTitle>sign in</FormTitle>
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
          </FormFlexContainer>
          <BtnWrapp>
            <Button type="submit">Login</Button>
            <ButtonLink to="/register">Register</ButtonLink>
            <GoogleAuth />
          </BtnWrapp>
        </AuthForm>
      </Wrapper>
    </Container>
  );
}
