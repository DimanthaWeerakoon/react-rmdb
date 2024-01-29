import React from "react";
import PropType from "prop-type";
import { Link } from "react-router-dom";

//Styles
import { Image } from "./Thumb.styles";

const Thumb = ({ image, movieId, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt="movie-thumb" />
      </Link>
    ) : (
      <Image src={image} alt="movie-thumb" />
    )}
  </div>
);

Thumb.propTypes = {
  image: PropType.string,
  movieId: PropType.number,
  clickable: PropType.bool,
};
export default Thumb;
