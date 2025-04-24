/**
 * MovieCard Component
 * This component displays a movie card with its poster, title, and type.
 * It also includes a button to show more details about the movie.
 */
import React from "react";
import { MovieSummary } from "../types/Movie";
import defaultPoster from "../../assets/defaultPoster.png";
import "../../styles/MovieCard.scss";
import { FiInfo } from "react-icons/fi"; 

interface Props {
  movie: MovieSummary;
  onMoreDetails: () => void;
}

/**
 * 
 * @param param0 
 * @returns  MovieCard component that displays a movie's poster, title, and type.
 */
const MovieCard: React.FC<Props> = ({ movie, onMoreDetails }) => {
  return (
    <div className="movie-card">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : defaultPoster}
        alt={movie.Title}
        className="poster"
      />
      <div className="info-block">
        <h3 className="movie-title">{movie.Title}</h3>
        <div className="type-and-icon">
          <span className="movie-type">{movie.Type}</span>
          <button
            className="details-btn"
            onMouseEnter={onMoreDetails}
            onClick={onMoreDetails}
            title="More Details"
          >
            <FiInfo size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
