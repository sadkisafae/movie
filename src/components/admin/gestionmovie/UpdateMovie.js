import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateMovie() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movies, setMovies] = useState({});

  useEffect(() => {
    if (id === "new") return;
    const fetchPost = async () => {
      const { data } = await axios.get(` http://localhost:3500/movies/${id}`);
      setMovies(data);
    };
    fetchPost();
  }, [id]);
  const handelChange = (e) => {
    const colPost = { ...movies };
    colPost[e.target.name] = e.target.value;
    setMovies(colPost);
  };
  const Update = async (e) => {
    e.preventDefault();
    if (id === "new") {
      axios.post(`http://localhost:3500/movies`, movies);
      return navigate("/");
    } else {
      axios.put(`http://localhost:3500/movies` + "/" + id, movies).then(navigate('/admin'));
    }
  };

  return (
    <div>
      <h2>User Details</h2>
      <form action="post">
        <h3 style={{ margin: "2%" }}> Add movie</h3>
        <label>title</label>
        <input type="text" onChange={handelChange} value={movies.Title} name='Title' />
        <br /> <br />
        <label>description</label>
        <textarea placeholder=" entrer la description du film " onChange={handelChange} value={movies.Synopsis}  name='Synopsis' /> <br /> <br />
        <label> duration</label>
        <input type="text" onChange={handelChange} value={movies.Duration} name='Duration' /> <br /> <br />
        <label> image</label>
        <input type="text" placeholder="archive select" onChange={handelChange} value={movies.Image} name='Image' /> <br /> <br />
        <label> relaese date</label>
        <input type="date"  onChange={handelChange}  value={movies.ReleaseDate} name='ReleaseDate'/> <br /> <br />
        <label> rating </label>
        <input type="text"  onChange={handelChange}  value={movies.Rating} name='Rating' />
        <br /> <br /> 
        <label> Country </label>
        <input type="text"  onChange={handelChange}  value={movies.Country} name='Country' />
        <button onClick={Update} className=" btn btn-primary mt-1">
           update
        </button>
      </form>
    </div>
  );
}

export default UpdateMovie;
