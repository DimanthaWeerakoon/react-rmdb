import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

// Styles
import { Wrapper, Content } from "./BreadCrumb.styles";

const BreadCrumb = ({ moiveTitle }) => (
  <Wrapper>
    <Content>
      <Link to="/">
        <span>Home</span>
      </Link>
      <span></span>
      <span>{moiveTitle}</span>
    </Content>
  </Wrapper>
);

BreadCrumb.propTypes = {
  moiveTitle: PropTypes.string,
};

export default BreadCrumb;
