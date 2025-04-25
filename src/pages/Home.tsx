import { useEffect, useState } from "react";
import { useDebounce } from "../shared/hooks/useDebounce";
import SearchInput from "../shared/components/SearchInput";
import MovieCard from "../shared/components/MovieCard";
import MovieDetailsPopup from "../shared/components/MovieDetails";
import { useAbortableFetch } from "../shared/hooks/useAbortableFetch";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MovieDetail, MovieSummary } from "../shared/types/Movie";
import "../App.scss";
import { useMovieService } from "../shared/hooks/useMovieService";
import Pagination from "../shared/components/Pagination";

/**
 * 
 * @returns the Home component that displays the main page of the application.
 * It includes a search input, a list of movie cards, and a popup for movie details.
 */
const Home = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query);
  const [results, setResults] = useState<MovieSummary[]>([]);
  const [popupData, setPopupData] = useState<MovieDetail | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const movieService = useMovieService();

  // This effect fetches movies based on the debounced query and page number.
  useAbortableFetch(async (signal) => {
    if (debouncedQuery.length >= 3) {
      setLoading(true);
      const { movies, totalResults } = await movieService.fetchMovies(
        debouncedQuery,
        signal,
        page
      );
      setResults(movies ?? []);
      setTotalPages(Math.ceil(totalResults / 10));
      setLoading(false);
    }
  }, [debouncedQuery, page]);

  // Reset page to 1 when the debounced query changes
  useEffect(() => {
    if (debouncedQuery.length >= 3) {
      setPage(1);
    }
  }, [debouncedQuery]);

  /**
   * 
   * @param id the id of the movie to fetch details for
   * @returns the details of the movie
   */
  const showDetails = async (id: string) => {
    const data = await movieService.fetchMovieById(id);
    setPopupData(data);
  };

  return (
    <div className="container">
      <ToastContainer position='top-right' autoClose={3000} hideProgressBar={true} limit={1} theme="colored" />
      <h1 className="app-title">Search Movie</h1>
      <SearchInput value={query} onChange={setQuery} />
      <div className="results">
        {results.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onMoreDetails={() => showDetails(movie.imdbID)}
          />
        ))}
      </div>

      {!loading && results.length === 0 && debouncedQuery.length >= 3 && (
        <p className="no-results-message">No results found.</p>
      )}

      {popupData && (
        <MovieDetailsPopup
          details={popupData}
          onClose={() => setPopupData(null)}
        />
      )}

      {totalPages > 1 && (
        <div className="pagination">
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={(page) => setPage(page)}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
