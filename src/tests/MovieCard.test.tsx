import { render, screen, fireEvent } from "@testing-library/react";
import MovieCard from "../shared/components/MovieCard";
import { MovieSummary } from "../shared/types/Movie";

const mockMovie: MovieSummary = {
  Title: "The Matrix",
  Year: "1999",
  imdbID: "tt0133093",
  Type: "movie",
  Poster: "https://example.com/poster.jpg",
};

describe("MovieCard Component", () => {
  // Test if the MovieCard component renders without crashing
  it("renders movie title and type", () => {
    render(<MovieCard movie={mockMovie} onMoreDetails={jest.fn()} />);
    expect(screen.getByText("The Matrix")).toBeInTheDocument();
    expect(screen.getByText("movie")).toBeInTheDocument();
  });

  // Test if the MovieCard component renders the movie poster correctly
  it("renders the poster correctly", () => {
    const { getByAltText } = render(
      <MovieCard movie={mockMovie} onMoreDetails={jest.fn()} />
    );
    const img = getByAltText("The Matrix") as HTMLImageElement;
    expect(img.src).toBe(mockMovie.Poster);
  });

  // Test if the MovieCard component handles the absence of a poster image correctly
  it("uses default image when poster is 'N/A'", () => {
    const movieWithNoPoster = { ...mockMovie, Poster: "N/A" };
    const { getByAltText } = render(
      <MovieCard movie={movieWithNoPoster} onMoreDetails={jest.fn()} />
    );
    const img = getByAltText("The Matrix") as HTMLImageElement;
    expect(img.src).toContain("defaultPoster.png");
  });

  // Test if the MovieCard component calls the onMoreDetails function when the button is clicked
  it("calls onMoreDetails when icon is hovered or clicked", () => {
    const onMoreDetailsMock = jest.fn();
    render(<MovieCard movie={mockMovie} onMoreDetails={onMoreDetailsMock} />);
    const button = screen.getByTitle("More Details");

    fireEvent.mouseEnter(button);
    expect(onMoreDetailsMock).toHaveBeenCalledTimes(1);

    fireEvent.click(button);
    expect(onMoreDetailsMock).toHaveBeenCalledTimes(2);
  });
});
