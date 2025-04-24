import React from "react";
import "../../styles/SearchInput.scss";

type Props = {
  value: string;
  onChange: (val: string) => void;
};

/// SearchInput component allows the user to input a search query for movies or shows.
const SearchInput: React.FC<Props> = ({ value, onChange }) => (
  <input
    className="search-input"
    placeholder="Search movies or shows..."
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);

export default SearchInput;
