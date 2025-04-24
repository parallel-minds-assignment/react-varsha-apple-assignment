import { injectable } from "tsyringe";
import { IMovieService } from "../interfaces/IMovieService";
import axiosInstance from "../api/axiosInstance";
import { MovieDetail, MovieSummary } from "../../shared/types/Movie";
import { toast } from "react-toastify";
import { getSessionCache, setSessionCache } from "../helper/storageCache";
import { extractErrorMessage } from "../helper/errorMessage";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

interface ApiResponse {
  Search?: MovieSummary[];
  totalResults?: string;
  Response: string;
  Error?: string;
}
@injectable()

export class MovieService implements IMovieService {
  /**
   * 
   * @param search the search term to fetch movies
   * @param signal 
   * @param page 
   * @returns  the list of movies and the total number of results
   */
  async fetchMovies(search: string, signal: AbortSignal, page = 1): Promise<{ movies: MovieSummary[]; totalResults: number }> {
    const cacheKey = `search_${search}_page_${page}`;
    const cached = getSessionCache<{ movies: MovieSummary[]; totalResults: number }>(cacheKey);
    if (cached) return cached;

    try {
      const response = await axiosInstance.get<ApiResponse>("", {
        params: { apikey: API_KEY, s: search, page },
        signal,
      });

      if (response.data.Response === "True") {
        const movies = response.data.Search ?? [];
        const totalResults = parseInt(response.data.totalResults || "0", 10);
        const data = { movies, totalResults };
        setSessionCache(cacheKey, data);
        return data;
      } else {
        throw new Error(response.data.Error || "Movie not found");
      }
    } catch (error: unknown) {
      const errorMsg = extractErrorMessage(error);
      toast.error(errorMsg);
      throw new Error(errorMsg);
    }
  }

  /**
   * @param id the id of the movie to fetch
   * @returns the details of the movie
   * @throws an error if the movie is not found or if there is an issue with the API request
   */
  async fetchMovieById(id: string): Promise<MovieDetail> {
    const cached = getSessionCache<MovieDetail>(`movie_${id}`);
    if (cached) return cached;

    try {
      const response = await axiosInstance.get("", {
        params: { apikey: API_KEY, i: id },
      });

      if (response.data.Response === "True") {
        setSessionCache(`movie_${id}`, response.data);
        return response.data;
      } else {
        throw new Error(response.data.Error || "Movie details not found");
      }
    } catch (error: unknown) {
      const errorMsg = extractErrorMessage(error);
      toast.error(errorMsg);
      throw new Error(errorMsg);
    }
  }
}
