import React from "react";
import PropType from "prop-type";
//Helpers
import { calcTime, convertMoney } from "../../helpers";

// Styles
import { Wrapper, Content } from "./MovieInfoBar.styles";

const MovieInfoBar = ({ time, budget, revenue }) => (
  <Wrapper>
    <Content>
      <div className="column">
        <p>Running time: {calcTime(time)}</p>
      </div>
      <div className="column">
        <p>Budget: {convertMoney(budget)}</p>
      </div>
      <div className="column">
        <p>Running time: {convertMoney(revenue)}</p>
      </div>
    </Content>
  </Wrapper>
);

MovieInfoBar.propTypes = {
  time: PropType.number,
  budget: PropType.number,
  revenue: PropType.number,
};

export default MovieInfoBar;
