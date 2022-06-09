import { Button, Icon } from "@mui/material";
import React, { useState } from "react";
import GoogleLogin from "react-google-login";

import "./loginStyles.css";

function LoginForm() {
  const [login, setLogin] = useState(true);
  const [userData, setUserData] = useState({
    firstName: "",
    secondName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [passwordMissmatch, setPasswordMissmatch] = useState(false);

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (userData.password !== userData.confirmPassword) {
      setPasswordMissmatch(true);
      setUserData({ ...userData, password: "", confirmPassword: "" });
    }
  };

  const handleGoogleSuccess = async (res) => {
    console.log("Success");
    console.log(res);
  };
  const handleGoogleFailure = (error) => {
    console.log("Failed");
    console.log(error);
  };

  return (
    <div>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-7 mt-2 col-lg-5 col-xl-5 offset-xl-1">
              <p className="font-weight-light">Create Account:</p>
              <form onSubmit={handleSignup}>
                {/*  Name input  */}
                {!login && (
                  <>
                    <div className="form-outline mb-1">
                      <input
                        type="text"
                        id="firstName"
                        className="form-control form-control-lg"
                        name="firstName"
                        value={userData.firstName}
                        onChange={handleUserInput}
                      />
                      <label className="form-label" htmlFor="firstName">
                        First name
                      </label>
                    </div>
                    <div className="form-outline mb-1">
                      <input
                        type="text"
                        id="secondName"
                        className="form-control form-control-lg"
                        name="secondName"
                        value={userData.secondName}
                        onChange={handleUserInput}
                      />
                      <label className="form-label" htmlFor="secondName">
                        Second name
                      </label>
                    </div>
                  </>
                )}

                {/*  Email input  */}
                <div className="form-outline mb-1">
                  <input
                    type="email"
                    id="email"
                    className="form-control form-control-lg"
                    name="email"
                    value={userData.email}
                    onChange={handleUserInput}
                  />
                  <label className="form-label" htmlFor="email">
                    Email address
                  </label>
                </div>
                {/*  Password input */}
                <div className="form-outline mb-1">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="form-control form-control-lg"
                    name="password"
                    value={userData.password}
                    onChange={handleUserInput}
                  />
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <label
                    className="form-label float-right text-success"
                    htmlFor="password"
                    onClick={handleShowPassword}
                  >
                    Show password
                  </label>
                </div>
                {!login && (
                  <div className="form-outline mb-1">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="confirmPassword"
                      className="form-control form-control-lg"
                      name="confirmPassword"
                      value={userData.confirmPassword}
                      onChange={handleUserInput}
                    />
                    {passwordMissmatch && (
                      <p className="text-danger">Password missmatch</p>
                    )}
                    <label className="form-label" htmlFor="confirmPassword">
                      Confirm Password
                    </label>
                    <label
                      className="form-label float-right text-success"
                      htmlFor="confirmPassword"
                      onClick={handleShowPassword}
                    >
                      Show confirm-password
                    </label>
                  </div>
                )}
                <div className="d-flex justify-content-around align-items-center mb-1">
                  <p>
                    {login ? "Don't" : "Already"} have an account?{" "}
                    <a href="#!" onClick={() => setLogin(!login)}>
                      {login ? "Sign up" : "Sign in"}
                    </a>
                  </p>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                >
                  {login ? "Sign in" : "Sign up"}
                </button>
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>

                <GoogleLogin
                  clientId="394888392816-saersp2nam0htbfj9bupmvkerat51l9l.apps.googleusercontent.com"
                  render={(renderProps) => (
                    <Button
                      className=""
                      color="primary"
                      fullWidth
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      startIcon={<Icon />}
                      variant="contained"
                    >
                      Google Sign In
                    </Button>
                  )}
                  onSuccess={handleGoogleSuccess}
                  onFailure={handleGoogleFailure}
                  cookiePolicy="single_host_origin"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginForm;
