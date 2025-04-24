import { render, screen, fireEvent } from "@testing-library/react";
import MovieDetails from "../shared/components/MovieDetails";
import { MovieDetail } from "../shared/types/Movie";

// Mock MovieDetail object
const mockDetails: MovieDetail = {
  Title: "Inception",
  Year: "2010",
  Genre: "Action, Adventure, Sci-Fi",
  Runtime: "148 min",
  Plot: "A thief who steals corporate secrets through the use of dream-sharing technology.",
  Ratings: [
    { Source: "Internet Movie Database", Value: "8.8/10" },
    { Source: "Rotten Tomatoes", Value: "87%" },
  ],
  // Add all required properties (if any more are used in your real type)
  Rated: "PG-13",
  Released: "16 Jul 2010",
  Director: "Christopher Nolan",
  Writer: "Christopher Nolan",
  Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
  Language: "English",
  Country: "USA",
  Awards: "Won 4 Oscars. Another 152 wins & 218 nominations.",
  Poster: "https://example.com/inception.jpg",
  Metascore: "74",
  imdbRating: "8.8",
  imdbVotes: "2,000,000",
  imdbID: "tt1375666",
  Type: "movie",
  DVD: "07 Dec 2010",
  BoxOffice: "$292,576,195",
  Production: "Legendary Pictures",
  Website: "N/A",
  Response: "True",
};

describe("MovieDetails Component", () => {
  test("renders movie details correctly", () => {
    render(<MovieDetails details={mockDetails} onClose={jest.fn()} />);

    expect(screen.getByText("Inception")).toBeInTheDocument();
    expect(screen.getByText("2010")).toBeInTheDocument();
    expect(screen.getByText("Action, Adventure, Sci-Fi")).toBeInTheDocument();
    expect(screen.getByText("148 min")).toBeInTheDocument();
    expect(screen.getByText(mockDetails.Plot!)).toBeInTheDocument();

    // Ratings
    expect(screen.getByText("Ratings")).toBeInTheDocument();
    expect(screen.getByText(/Internet Movie Database/i)).toBeInTheDocument();
    expect(screen.getByText("8.8/10")).toBeInTheDocument();
    expect(screen.getByText((content) => content.includes("Rotten Tomatoes"))).toBeInTheDocument();
    expect(screen.getByText("87%")).toBeInTheDocument();
  });

  test("calls onClose when close button is clicked", () => {
    const onCloseMock = jest.fn();
    render(<MovieDetails details={mockDetails} onClose={onCloseMock} />);

    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  test("renders without ratings if not provided", () => {
    const modifiedDetails = { ...mockDetails, Ratings: [] };
    render(<MovieDetails details={modifiedDetails} onClose={jest.fn()} />);

    expect(screen.queryByText("Ratings")).not.toBeInTheDocument();
  });
});
