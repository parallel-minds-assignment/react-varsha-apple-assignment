
/**
 * Movie API response types
 */
export interface MovieSummary {
  imdbID: string;
  Title: string;
  Poster: string;
  Type: string;
  Year: string;
}

export interface MovieDetail extends MovieSummary {
  Rated?: string;
  Released?: string;
  Runtime?: string;
  Genre?: string;
  Director?: string;
  Writer?: string;
  Actors?: string;
  Plot?: string;
  Language?: string;
  Country?: string;
  Awards?: string;
  Ratings?: { Source: string; Value: string }[];
  Metascore?: string;
  imdbRating?: string;
  imdbVotes?: string;
  DVD?: string;
  BoxOffice?: string;
  Production?: string;
  Website?: string;
  Response?: string;
}
