import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "../../Pagination";

function GestionMovies() {
  const [movies, setMovies] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = movies.slice(firstPostIndex, lastPostIndex);
  const url = "http://localhost:3500/movies/";
  const loadMovies = () => {
    axios.get(url).then((res) => {
      setMovies(res.data.reverse());
    });
  };
  useEffect(() => {
    loadMovies();
  }, []);

  function Delete(id) {
    console.log(id);
    axios.delete(`http://localhost:3500/movies/${id}`).then(loadMovies());
  }
  return (
    <div>
      <Link to="/AddMovie" className=" btn btn-primary mt-1">
        Add Movie
      </Link>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Duration</th>
            <th scope="col">Country</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          {currentPosts.map((data, index) => (
            <tr key={index}>
              <td>{data.Title}</td>
              <td>{data.Duration}</td>
              <td>{data.Country}</td>
              <td>
                <Link
                  to={`/updateMovie/${data.id}`}
                  className="btn btn-primary"
                >
                  edit
                </Link>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => Delete(data.id)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        totalPosts={movies.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default GestionMovies;
