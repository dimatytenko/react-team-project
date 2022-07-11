import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import {
  Form,
  LoginHeader,
  Wrapper,
  ButtonDisable,
} from './Login.styled';
import { Container } from '../Container';
import Input from '@mui/material/Input';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
// import Button from "@mui/material/Button";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import {Alert} from '@mui/material';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import {
  BtnWrapp,
  Button,
  ButtonLink,
} from './forms.styled';

const InputLabelStyled = styled(InputLabel)`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9b9faa;
  :hover {
    color: #fc842d;
  }
`;

const initialState = {
  email: '',
  password: '',
};

const validateEmail = email => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export default function Login(props) {
  const dispatch = useDispatch();
  // const error=useSelector(authSelectors.getError)
  const [userInfo, setUserInfo] = useState({
    ...initialState,
  });
  const [showPassword, setShow] = useState(false);

  const handleChange = prop => event => {
    setUserInfo({
      ...userInfo,
      [prop]: event.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn(userInfo));
    setUserInfo(initialState);
  };
  const changePassword = () => {
    setShow(prev => (prev = !prev));
  };
  return (
    <Container>
      <Wrapper>
        <Form action="submit" onSubmit={handleSubmit}>
          <LoginHeader>Sign in</LoginHeader>
          <FormControl
            sx={{ m: 0, width: '29ch' }}
            variant="standard"
          >
            <InputLabelStyled
              htmlFor="Login"
              className="InputLabel"
            >
              Email
            </InputLabelStyled>
            <Input
              required
              color={
                validateEmail(userInfo.email)
                  ? 'warning'
                  : 'error'
              }
              style={{ marginBottom: 40 }}
              fullWidth
              id="email"
              value={userInfo.email}
              onChange={handleChange('email')}
            />
          </FormControl>
          <FormControl
            sx={{ m: 0, width: '29ch' }}
            variant="standard"
          >
            <InputLabelStyled htmlFor="password">
              Password
            </InputLabelStyled>
            <Input
              required
              color={
                userInfo.password.length > 8
                  ? 'warning'
                  : 'error'
              }
              fullWidth
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={userInfo.password}
              onChange={handleChange('password')}
              endAdornment={
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
              }
            />
          </FormControl>
          <BtnWrapp>
            <Button type="submit">Login</Button>
            <ButtonLink to="/register">Register</ButtonLink>
          </BtnWrapp>

          {/* <ButtonColor type="submit">Login</ButtonColor> */}
        </Form>
      </Wrapper>
    </Container>
  );
}
