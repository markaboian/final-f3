import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <Link to={`/dentist/${id}`}>
        <img src="./images/doctor.jpg" alt="doctor" style={{ width: "150px", height: "150px" }} />
      </Link>
      <h1>{name}</h1>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <p>{username}</p>
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;