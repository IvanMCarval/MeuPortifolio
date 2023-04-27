import React from "react";
import "./style.css";

function Perfil() {
  return (
    <div className="perfilContainer">
      <div className="divImg">
        <img
          src="./20230316_102551.jpg"
        />
      </div>
      <div className="divSobre">
        <h1>Sobre</h1>
        <p>
          Comecei minha carreira como estagiário em uma loja de informática
          prestando assistência técnica em computadores. Trabalhei pouco mais de
          um ano como atendente de serviço especializado. Trabalhei como
          desenvolvedor júnior por um ano e atualmente estudo para me
          especializar em front-end web e mobile, também estudo desenvolvimento
          de jogos digitais 2D.
        </p>
      </div>
    </div>
  );
}

export default Perfil;
