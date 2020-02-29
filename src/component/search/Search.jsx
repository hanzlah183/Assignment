import React, { useState } from "react";
import List from "../list-item/ListItem";

const Search = ({ animal: { name, loading } }) => {
  const [state, setState] = useState({ search: "" });

  const handleChange = e => {
    return setState({ search: e.target.value });
  };

  const result = name.filter(item =>
    item.toLowerCase().includes(state.search.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
        <input
          className="form-control form-control-sm ml-3 w-75 text-justify"
          type="text"
          placeholder="Search"
          onChange={handleChange}
        />
      </form>
      {state.search.length > 0 ? (
        <h3 className="text-text-info mt-4 text-right">
          Search Result:{result.length}
        </h3>
      ) : (
        <h3 className="text-text-info mt-4 text-left">
          Total Result:{name.length}
        </h3>
      )}

      {loading ? <h3>Loading...</h3> : <List result={result} />}
    </div>
  );
};

export default Search;
