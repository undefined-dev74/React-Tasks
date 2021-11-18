import React, { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setUser, selectUser, clearState } from "../../app/userSlice";
import { useHistory, Link } from "react-router-dom";
import { Divider, Row } from "antd";
import {
  LoginContainer,
  LoginForm,
  LoginHeader,
  LoginHeadings,
  LoginIcons,
  MainContainer,
  SignUpIcons,
  TeamplateContainer,
} from "./Login.styled";
const Login = () => {
  const dispatch = useDispatch();
  //   const history = useHistory();
  //   const { registor, errors, handleSubmit } = useForm();
  const user = useSelector((state) => state.user);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(setUser({ email: userEmail, password: userPassword }));
  };
  // const [user, setUser] = useState(null);

  //   useEffect(() => {
  //     return () => {
  //       dispatch(clearState());
  //     };
  //   }, []);

  //   useEffect(() => {
  //     if (isSuccess) {
  //       dispatch(clearState());
  //       history.push();
  //     }
  //     if (isError) {
  //       alert(errorMessage);
  //       dispatch(clearState());
  //     }
  //   }, [isSuccess, isError]);

  return (
    <Fragment>
      <Row>
        <MainContainer>
          <LoginContainer>
            <LoginHeadings>
              <p>
                Have an account ?
                <span>
                  <a href="">Sign In</a>
                </span>
              </p>
              <LoginHeader>
                <h4>Welcome to Traccar</h4>
                <p>
                  To access our dashboard, please enter your email and password
                </p>
              </LoginHeader>
            </LoginHeadings>

            <LoginForm onSubmit={onFormSubmit}>
              <input
                type="email"
                placeholder="Enter your Email"
                onChange={(event) => setUserEmail(event.target.value)}
                value={userEmail}
              />
              <input
                type="password"
                placeholder="Enter your password"
                onChange={(event) => setUserPassword(event.target.value)}
                value={userPassword}
              />
              <button>Log In</button>
            </LoginForm>

            <LoginIcons>
              <Divider>Or Sign Up with</Divider>
              <SignUpIcons>
                <a href=""></a>
                <p>Icon 2</p>
                <p>Icon 3</p>
              </SignUpIcons>
            </LoginIcons>
          </LoginContainer>

          <TeamplateContainer> Template</TeamplateContainer>
        </MainContainer>
      </Row>
    </Fragment>
  );
};

export default Login;
