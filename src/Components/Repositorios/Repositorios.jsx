import React from "react";
import { useEffect, useState } from "react";
import api from "../../services/Api";
import "./style.css";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

function Repositorios() {
  const [repositorios, setRepositories] = useState([]);

  useEffect(() => {
    async function buscarRepositorios() {
      const repositoriosData = await api.get().then((response) => {
        const data = response.data;
        setRepositories(data);
      });
    }

    buscarRepositorios();
  }, []);

  function handleClick(url) {
    window.location.href = url
  }

  return (
    <div className="repoContainer overflow-scroll">
      <h1>Meus Repositorios</h1>
      {repositorios.map((repo) => {
        return (
          <article
            key={repo.id}
            className=""
          >
            <strong className="text-uppercase">{repo.name}</strong>
            <Button variant="outlined" startIcon={<GitHubIcon />} onClick={() => handleClick(repo.html_url)}>
              Link GitHub
            </Button>
          </article>
        );
      })}
    </div>
  );
}

export default Repositorios;
