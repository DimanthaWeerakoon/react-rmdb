import React from "react";
import PropType from "prop-type";

//Styles
import { Wrapper } from "./Button.styles";

const Button = ({ text, callBack }) => (
  <Wrapper type="button" onClick={callBack}>
    {text}
  </Wrapper>
);

Button.propTypes = {
  text: PropType.string,
  callBack: PropType.func,
};
export default Button;
