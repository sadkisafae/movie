import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import movies from "../movies/Movies";

import "./side.css";
// import axios from "axios";
export default function Side({ setKeywordS, setDatee2, setDatee1 }) {
  const [keyword, setKeyword] = useState("");
  // const [date1,setDate1] = useState();
  // const [date2,setDate2] = useState();

  const handleSearch = (e) => {
    e.preventDefault();
    setKeywordS(keyword);
    // setDatee1(date1);
    // setDatee2(date2);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className="mb-3 container">
          <div className="div1">
            <label className="form-label">Key word </label>
            <input
              type="text"
              onChange={(e) => setKeyword(e.target.value)}
              className="form-control"
            />
          </div>
          <div>
            <label className="form-label">Year from </label>
            <input
              type="date"
              className="form-control"
              // onChange={(e) => setDate1(e.target.value)}
            />
          </div>

          <div>
            <label className="form-label">Year to </label>
            <input
              type="date"
              className="form-control"
              // onChange={(e) => setDate2(e.target.value)}
            />
          </div>

          <div>
            <label className="form-label">rating from</label>
            <input type="number" className="form-control" />
          </div>

          <div>
            <label className="form-label">rating to </label>
            <input type="number" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary btn1">
            search
          </button>
          <button type="submit" className="btn btn-secondary btn2">
            clear
          </button>
        </div>
      </form>
    </div>
  );
}
