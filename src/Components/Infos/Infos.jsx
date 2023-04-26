import React from "react";
import "./style.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ListaCertificados from "../ListaCertificados/ListaCertificados";
import ListaExperiencia from "../ListaExperiencia/ListaExperiencia";
import ListaFormacao from "../ListaFormacao/ListaFormacao";

function Infos() {
  const urlLinkedin =
    "https://www.linkedin.com/in/ivan-mastrange-de-carvalho-4ab183165/";
  const urlGitHub = "https://github.com/IvanMCarval";

  return (
    <div className="infosContainer">
      <div className="redes">
        <h4>Redes</h4>
        <div>
          <a href={urlLinkedin} className="links">
            <LinkedInIcon fontSize="large" />
          </a>
          <a href={urlGitHub} className="links">
            <GitHubIcon fontSize="large" />
          </a>
        </div>
      </div>

      <ListaCertificados />

      <ListaExperiencia />

      <ListaFormacao />
    </div>
  );
}

export default Infos;
