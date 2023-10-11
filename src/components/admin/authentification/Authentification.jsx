import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "./Authentification.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState();
  const [errorMessages, setErrorMessages] = useState({});
  const [data, setData] = useState({});

  const url = "http://localhost:3500/admins/";
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(url).then(function (response) {
      setData(response.data);
    });
  }, []);

  const errorMsg = (name) =>
    name === errorMessages.name && (
      <div className="err"> {errorMessages.message}</div>
    );

  const error = {
    nom: "le nom est incorrect",
    passw: "le mot de passe est incorrect ",
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    var { nom, passw } = document.forms[0];
    setName(nom.value);
    const userData = data.find((user) => user.username === nom.value);

    if (userData) {
      if (userData.password !== passw.value) {
        setErrorMessages({ name: "passw", message: error.passw });
      } else {
        navigate("/Admin");
      }
    } else {
      setErrorMessages({ name: "nom", message: error.nom });
    }
  };
  return (
    <div className="Login-Form">
      <div className="Form">
        <form onSubmit={handelSubmit}>
          <div className="input-container">
            <label> username </label>
            <input type="text" name="nom" required />
            {errorMsg("nom")}
          </div>

          <div className="input-container">
            <label> password </label>
            <input type="text" name="passw" required />
            {errorMsg("passw")}
          </div>
          <div className="button-container">
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
