import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../API";
//Components
import Button from "./Button";

//Styles
import { Wrapper } from "./Login.styles";
//Context
import { Context } from "../context";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const [_user, setUser] = useState(Context);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError(false);
    try {
      const requestToken = await API.getRequestToken();
      const sessionId = await API.authenticate(
        requestToken,
        username,
        password
      );

      console.log(sessionId);
      console.log(_user);
      setUser({ sessionId: sessionId.session_id, username });

      navigate("/");
    } catch (error) {
      setError(true);
    }
  };
  const handleInput = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
  };
  return (
    <Wrapper>
      {error && <div className="error">There was an error! </div>}
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleInput}
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleInput}
      />
      <Button text="Login" callBack={handleSubmit} />
    </Wrapper>
  );
};

export default Login;
