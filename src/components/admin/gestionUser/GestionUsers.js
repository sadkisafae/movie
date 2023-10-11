import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "../../Pagination";
import { Button } from "react-bootstrap";
function GestionUsers() {
  const [users, setUsers] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = users.slice(firstPostIndex, lastPostIndex);

  const url = "http://localhost:3500/users";
  const loadUsers = () => {
    axios.get(url).then((res) => {
      setUsers(res.data.reverse());
    });
  };
  useEffect(() => {
    loadUsers();
  }, []);

  function Delete(id) {
    console.log(id);
    axios.delete(`http://localhost:3500/users/${id}`).then(loadUsers());
  }

  return (
    <div>

      <Link to="/Adduser" className=" btn btn-primary mt-1">
        Add user
      </Link>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th scope="col">nom</th>
            <th scope="col">prenom</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          {currentPosts.map((data) => (
            <tr key={data.id}>
              <td>{data.nom}</td>
              <td>{data.prenom}</td>
              <td>
                <Link to={`/updateuser/${data.id}`} className="btn btn-primary">
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
        totalPosts={users.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    
      <Link to='/admin'><Button className="bg-danger">return</Button></Link>
    </div>
  );
}
export default GestionUsers;
