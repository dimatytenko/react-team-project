import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
// import InputAdornment from "@mui/material/InputAdornment";
// import IconButton from "@mui/material/IconButton";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Container } from '../Container';
import { register } from '../../redux/auth/authOperations';
import { validationsSchemaRegistrationEn } from './validationShema';
import { MyTextInput } from '../../functions/formikFunctions';
import {
  Wrapper,
  FormTitle,
  FormFlexContainer,
  BtnWrapp,
  AuthForm,
  Button,
} from './forms.styled';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  // const [showPassword, setShow] = useState(false);

  //   const changePassword = () => {
  //      setShow((prev) => (prev = !prev));
  //    };

  return (
    <Container>
      <Wrapper>
        <FormTitle>register</FormTitle>
        <Formik
          initialValues={initialValues}
          validationSchema={validationsSchemaRegistrationEn}
        >
          <AuthForm
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <FormFlexContainer>
              <MyTextInput
                label="Name"
                name="name"
                type="text"
                value={name}
                onChange={handleChange}
                required
              />
              <MyTextInput
                label="Email"
                name="email"
                type="email"
                value={email}
                onChange={handleChange}
                required
              />
              <MyTextInput
                label="Password"
                name="password"
                type="password"
                value={password}
                onChange={handleChange}
                required
                // endAdornment={
                //         <InputAdornment position="end">
                //           <IconButton
                //             aria-label="toggle password visibility"
                //           onClick={changePassword}
                //             onMouseDown={(e) => {
                //               e.preventDefault();
                //             }}
                //             edge="end"
                //           >
                //                {showPassword ? <Visibility /> : <VisibilityOff />}
                //           </IconButton>
                //         </InputAdornment>}
              />
            </FormFlexContainer>
            <BtnWrapp>
              <Button>Login</Button>
              <Button type="submit">Register</Button>
            </BtnWrapp>
          </AuthForm>
        </Formik>
      </Wrapper>
    </Container>
  );
};
