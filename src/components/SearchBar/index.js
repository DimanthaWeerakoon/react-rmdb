import React, { useState, useEffect, useRef } from "react";
//Image
import searchIcon from "../../images/search-icon.svg";

//Styles
import { Wrapper, Content } from "./SearchBar.styles";

const SearchBar = ({ setSarchTerm }) => {
  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search icon" />
        <input type="text" placeholder="Search" />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
