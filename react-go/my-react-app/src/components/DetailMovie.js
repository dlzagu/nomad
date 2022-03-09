import PropTypes from "prop-types";
import React from 'react';



function DetailMovie({ coverImg, title, year, rating, runtime, description_intro, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        {title}
      </h2>
      <p>year : {year}</p>
      <p>rating : {rating}</p>
      <p>runtime : {runtime}</p>
      <h3>genres</h3>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <h3>description_intro</h3>
      <p>{description_intro}</p>
     
    </div>
  );
}

DetailMovie.prototype = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
  description_intro: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default DetailMovie;