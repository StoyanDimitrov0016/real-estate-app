import { useState } from "react";
import "./searchBar.scss";

const MIN_PRICE_IN_DOLLARS = 0;
const MAX_PRICE_IN_DOLLARS = 30_000_000;

const types = ["buy", "rent"];

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (typeValue) => {
    setQuery((prev) => ({ ...prev, type: typeValue }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="City Location" />

        <input
          type="number"
          name="minPrice"
          min={MIN_PRICE_IN_DOLLARS}
          max={MAX_PRICE_IN_DOLLARS}
          placeholder="Min Price"
        />

        <input
          type="number"
          name="maxPrice"
          min={MIN_PRICE_IN_DOLLARS}
          max={MAX_PRICE_IN_DOLLARS}
          placeholder="Max Price"
        />

        <button>
          <img src="/search.png" alt="search" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
