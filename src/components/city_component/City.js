import React from "react";
import "./City.css";

export default function City({ setQuery, search, query }) {
  return (
    <div>
      <div className="d-flex flex-direction-column">
        <form className="row g-3 mt-20" onSubmit={search}>
          <div className="col-auto">
            <label htmlFor="inputPassword2" className="visually-hidden"></label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter City"
              required
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
