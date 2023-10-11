import "./components/acceuil/side/side.css";
import Authentification from "./components/admin/authentification/Authentification.jsx";
import { Routes, Route } from "react-router-dom";
import AddMovie from "./components/admin/addmovie/AddMovie.jsx";
import Pages from "./pages/Pages.jsx";
import Admin from "./components/admin/Admin";
import GestionMovies from "./components/admin/gestionmovie/GestionMovies.jsx";
import "./App.css";
import GestionUsers from "./components/admin/gestionUser/GestionUsers";
import AddUser from "./components/admin/adduser/Adduser";
import UpdateMovie from "./components/admin/gestionmovie/UpdateMovie";
import Details from "./components/details/Details";
import UpdateUser from "./components/admin/gestionUser/UpdateUser";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Pages />} exact />
        <Route path="/Authentification" element={<Authentification />} />
        <Route path="/GestionMovies" element={<GestionMovies />} />
        <Route path="/GestionUsers" element={<GestionUsers />} />
        <Route path="/updateuser/:id" element={<UpdateUser />} />
        <Route path="/updateMovie/:id" element={<UpdateMovie />} />

        <Route path="/Admin/*" element={<Admin />} />
        <Route path="/AddMovie" element={<AddMovie />} />
        <Route path="/Adduser" element={<AddUser />} />
        <Route path="/Details/:id" element={<Details />} />
      
      </Routes>
    </div>
  );
}

export default App;
