import React, { useEffect, useState } from "react";

//API
import API from "../API";

//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

//Compnents
import HeroImage from "./HeroImage";
import Grid from "./Grid";

//Hooks
import { useHomeFetch } from "../hooks/useHomeFetch";
//Image
import NoImage from "../images/no_image.jpg";

const Home = () => {
  const { state, loading, error } = useHomeFetch();
  console.log(state);

  return (
    <>
      {state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <Grid header="Popular movies">
        {state.results.map((movie) => (
          <div key={movie.id}>{movie.title}</div>
        ))}
      </Grid>
    </>
  );
};

export default Home;
