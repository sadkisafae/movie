import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateUser() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({});
 
  useEffect(() => {
    if (id === "new") return;
    const fetchPost = async () => {
      const { data } = await axios.get(` http://localhost:3500/users/${id}`);
      setUser(data);
    };
    fetchPost();
  }, []);
  const handelChange = (e) => {
    const colPost = { ...user };
    colPost[e.target.name] = e.target.value;
    setUser(colPost);
  };
  const Update = async (e) => {
    e.preventDefault();
    if (id === "new") {
      axios.post(`http://localhost:3500/users`, user);
      return navigate("/GestionUsers");
    } else {
      axios.put(`http://localhost:3500/users` + "/" + id, user).then(navigate('/GestionUsers'));
    }
  };

  return (
    <div>
      <h2>User Details</h2>
      <br /> <br />
      <form action="post">
        <h3 style={{ margin: "2%" }}> Add user</h3>
        <label>nom</label>
        <input type="text" onChange={handelChange} value={user.nom} name='nom' />
        <br /> <br />

        <label>prenom</label>
        <input type="text" onChange={handelChange} value={user.prenom} name='prenom' />
        <br /> <br />

       
        <button onClick={Update} className=" btn btn-primary mt-1">
           update
        </button>
      </form>
    </div>
  );
}

export default UpdateUser;

