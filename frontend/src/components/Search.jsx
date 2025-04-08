import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    if (keyword?.trim()) {
      navigate(`/?keyword=${keyword}`); // Adjusted to correctly format the URL
    } else {
      navigate("/"); // Redirect to the homepage if no keyword
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="input-group mb-lg-4 mb-2" style={{ maxWidth: "400px" }}>
        <span
          className="input-group-text"
          style={{
            backgroundColor: "rgb(121, 22, 121)",
            border: "none",
            color: "#fff",
          }}
        >
          <i className="fas fa-search icon-responsive" />
        </span>
        <input
          type="text"
          className="form-control shadow-sm input-responsive"
          placeholder="Search by name..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)} // Update state on input change
          style={{
            border: "1px solid rgb(121, 22, 121)",
            borderLeft: "none",
            borderRadius: "0 0.375rem 0.375rem 0",
          }}
        />
      </div>
    </form>
  );
};

export default Search;
