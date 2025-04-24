import React from "react";
import { MovieDetail } from "../types/Movie";
import "../../styles/MovieDetails.scss";

interface Props {
  details: MovieDetail;
  onClose: () => void;
}

/**
 * @param param0 
 * @returns MovieDetails component that displays detailed information about a movie.
 */
const MovieDetails: React.FC<Props> = ({ details, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-container" tabIndex={-1}>
        <button className="popup-close" onClick={onClose} aria-label="Close movie details">×</button>
        <div className="popup-info-wrapper">
          <h2 className="popup-title">{details.Title}</h2>
          <div className="popup-meta">
            <span>{details.Year}</span> • <span>{details.Genre}</span> • <span>{details.Runtime}</span>
          </div>
          <p className="popup-plot">{details.Plot}</p>
          {Array.isArray(details.Ratings) && details.Ratings.length > 0 && (
            <div className="popup-ratings">
              <strong>Ratings</strong>
              <ul>
                {details.Ratings.map((rating) => (
                  <li key={rating.Source}>
                    {rating.Source}: <span>{rating.Value}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
