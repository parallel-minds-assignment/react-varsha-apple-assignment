import { render, screen, fireEvent } from "@testing-library/react";
import SearchInput from "../shared/components/SearchInput";

describe("SearchInput", () => {
  //
  test("renders input with correct value", () => {
    render(<SearchInput value="Batman" onChange={jest.fn()} />);
    expect(screen.getByPlaceholderText(/search movies/i)).toHaveValue("Batman");
  });

  test("calls onChange when typing", () => {
    const handleChange = jest.fn();
    render(<SearchInput value="" onChange={handleChange} />);
    const input = screen.getByPlaceholderText(/search movies/i);
    fireEvent.change(input, { target: { value: "Avengers" } });
    expect(handleChange).toHaveBeenCalledWith("Avengers");
  });
});
