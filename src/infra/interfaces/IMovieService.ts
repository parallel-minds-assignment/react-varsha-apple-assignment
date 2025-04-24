/**
 * Interface for the MovieService class.
*/
import { MovieDetail, MovieSummary } from "../../shared/types/Movie";
export interface IMovieService {
  fetchMovies(search: string, signal: AbortSignal, page: number): Promise<{
    movies: MovieSummary[];
    totalResults: number;
  }>;
  fetchMovieById(id: string): Promise<MovieDetail>;
}
