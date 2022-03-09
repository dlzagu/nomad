import PropTypes from "prop-types";
import React from 'react';
import {Link} from "react-router-dom";


function Movie({id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt ={title} />
      <h2>
        <Link to= {`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary.length > 235 ? `${summary.slice(0,235)}`: summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.prototype = {
  id : PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;