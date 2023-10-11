import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import GestionMovies from "./gestionmovie/GestionMovies";

const Admin = () => {
  return (
    <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
      <div
        className="head"
        style={{
          backgroundColor: "blue",
          height: "100%",
          width: "100%",
          color: "white",
        }}
      >
        <h1> Admin Portal </h1>
      </div>
      <div
        className="body"
        style={{
          height: "60%",
          display: "flex",
          flexDirection: "row",
          marginLeft: "3%",
        }}
      >
        <div
          className="side"
          style={{ marginTop: "1%", backgroundColor: "lightblue", with: "60%" }}
        >
          <Link to="/Admin" className=" btn btn-primary mt-1">
            Movies
          </Link>
          <br /> <br />
          <Link to="/GestionUsers" className=" btn btn-primary mt-1">
            Users
          </Link>
          <br /> <br />
          <Link to="/Authentification" className=" btn btn-primary mt-1">
            Logout
          </Link>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<GestionMovies />} exact />
          </Routes>
        </div>

      </div>
    </div>
  );
};

export default Admin;
