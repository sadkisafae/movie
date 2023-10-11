import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser(props) {
   const [nom, setNom] = useState();
  const [id, setId] = useState();
  const [prenom, setPrenom] = useState();

  const data = {
    nom: nom,
    id: id,
    prenom: prenom
  };

 
  const navigate = useNavigate();
  function Submit(e) {
    e.preventDefault();
    const url = "http://localhost:3500/users/";
    axios.post(url, data).then(navigate("/GestionUsers"));
  }
const handelCancel =()=>{
  
   navigate('/GestionUsers')
}
  return (
    <form>
      <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
       
        <div
          className="body"
          style={{
            height: "60%",
            display: "flex",
            flexDirection: "row",
            marginLeft: "3%",
          }}
        >
         
          <div className="main" style={{ margin: "1rem", with: "60%" }}>
            <form action="post">
              <h3 style={{ margin: "2%" }}> Add user</h3>
              <label>nom</label>
              <input
                type="text"
                name={nom}
                onChange={(e) => setNom(e.target.value)}
              />
              <br /> <br />
              <label>prenom</label>
              <input
                type="text"
                name={prenom}
                onChange={(e) => setPrenom(e.target.value)}
              />
             
             
              <button onClick={Submit} className=" btn btn-primary mt-1"> save</button>
              <button onClick={handelCancel} className=" btn btn-danger mt-1"> cancel</button>
              
            </form>
          </div>
        </div>
        <div
          className="foot"
          style={{
            backgroundColor: "blue",
            height: "30%",
            marginTop: "10%",
            width: "100%",
          }}
        ></div>
      </div>
    </form>
  );
}
