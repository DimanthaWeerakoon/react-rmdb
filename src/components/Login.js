import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from "../API";
//Components
import Button from "./Button";

//Styles
import { Wrapper } from "./Login.styles";
//Context
import { Context } from "../context";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {};
  const handleInput = (e) => {};
  return (
    <Wrapper>
      <label>Username</label>
      <input
        type="text"
        value="state value"
        name="username"
        onChange={handleInput}
      />
      <input
        type="password"
        name="password"
        value="state value"
        onChange={handleInput}
      />
      <Button text="Login" callBack={handleSubmit} />
    </Wrapper>
  );
};

export default Login;
