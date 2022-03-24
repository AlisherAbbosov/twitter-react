import Buttons from "../Buttons/Buttons";
import SiteLogo from "../Lib/Icons/logo.png";
import "./LoginPage.scss";
// import { NavLink } from "react-router-dom
import { Context } from "../../Content/Authentication";

import React from "react";

const LoginPage = () => {
  const { setToken } = React.useContext(Context);

  const HandleSubmit = evt => {
    evt.preventDefault();
    const { user_email, user_password } = evt.target.elements;

    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: user_email.value.trim(),
        password: user_password.value.trim(),
      }),
    })
      .then(response => response.json())
      .then(data => setToken(data?.token));
  };
  return (
    <div className="login ">
      <img className="login__logo" src={SiteLogo} alt="logo" />
      <h2 className="login__title">Log in to Twitter</h2>
      <form className="login__form" onSubmit={HandleSubmit}>
        <div>
          <input
            className="login__username-input login__inputs"
            type="text"
            name="user_email"
            defaultValue="eve.holt@reqres.in"
            placeholder="Phone number, email address"
          />
        </div>
        <div>
          <input
            className="login__password-input login__inputs"
            type="password"
            name="user_password"
            defaultValue="cityslicka"
            placeholder="Phone number, email address"
          />
        </div>
        <Buttons text="Log In" variant="login__btn" />
      </form>
      <div className="login__buttons-box">
        <button className="login__forgot login__buttons">
          Forgot password?
        </button>
        <button className="login__sing login__buttons">
          Sign up to Twitter
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
