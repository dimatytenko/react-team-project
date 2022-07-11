import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { Formik } from 'formik';
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
// import { MyTextInput } from '../../functions/formikFunctions';
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

import { useFormik } from 'formik';

// const initialValues = {
//   name: '',
//   email: '',
//   password: '',
// };

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const [showPassword, setShow] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationsSchemaRegistrationEn,
    onSubmit: values => {
      const { name, email, password } = values;
      dispatch(register({ name, email, password }));
      dispatch(logIn({ email, password }));
    },
  });

  const changePassword = () => {
    setShow(prev => (prev = !prev));
  };

  return (
    <Container>
      <Wrapper>
        <FormTitle>register</FormTitle>
        <AuthForm
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
              required
            />
            <MyInput
              fullWidth
              variant="standard"
              label="Email"
              id="email"
              value={formik.email}
              onChange={formik.handleChange}
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
            <ButtonLink to="/login">Login</ButtonLink>
            <Button type="submit">Register</Button>
          </BtnWrapp>
        </AuthForm>
        {/* </Formik> */}
      </Wrapper>
    </Container>
  );
}
