import React from "react";
import "./style.css";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function ListaCertificados() {
  const listUrl = {
    urlJava:
      "https://www.udemy.com/certificate/UC-d5b456b7-9b02-4f95-a110-18ac6eb8cc01/",
    urlMicro:
      "https://www.udemy.com/certificate/UC-3273b2d2-e038-4c94-b54b-6abc4a5e1527/",
    urlSpringReact:
      "https://www.udemy.com/certificate/UC-b0777bda-a101-4000-841f-56788a338d18/",
    urlReact:
      "https://www.udemy.com/certificate/UC-52428058-a949-4e0f-9dc2-211e77c52038/",
    urlCSharp:
      "https://www.udemy.com/certificate/UC-41f61ec1-e3d4-4dbe-ae5b-f2fce1757312/",
    urlJogos:
      "https://www.udemy.com/certificate/UC-26d21b95-3950-446f-9210-b9dc03cb0774/",
  };
  return (
      <Accordion className="list">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Cursos Extra Curriculares</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <List dense={false}>
              <ListItem>
                <ListItemIcon>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                    height={40}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Java COMPLETO 2023 Programação Orientada a Objetos +Projetos"
                  secondary={<a href={listUrl.urlJava}>Link do Certificado</a>}
                />
              </ListItem>
              <Divider sx={{backgroundColor: 'black'}}/>
              <ListItem>
                <ListItemIcon>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
                    height={40}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Microsserviços Java com Spring Boot e Spring Cloud"
                  secondary={<a href="">Link do Certificado</a>}
                />
              </ListItem>
              <Divider sx={{backgroundColor: 'black'}}/>
              <ListItem>
                <ListItemIcon sx={{ marginRight: "0.5rem" }}>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
                    height={40}
                    style={{ marginRight: "0.5rem" }}
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    height={40}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Spring Boot + React JS: Desenvolva Aplicações Web Completas"
                  secondary={
                    <a href="https://www.udemy.com/certificate/UC-d5b456b7-9b02-4f95-a110-18ac6eb8cc01/">
                      Link do Certificado
                    </a>
                  }
                />
              </ListItem>
              <Divider sx={{backgroundColor: 'black'}}/>
              <ListItem>
                <ListItemIcon>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    height={40}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="React Js do zero ao avançado na pratica"
                  secondary={
                    <a href="https://www.udemy.com/certificate/UC-d5b456b7-9b02-4f95-a110-18ac6eb8cc01/">
                      Link do Certificado
                    </a>
                  }
                />
              </ListItem>
              <Divider sx={{backgroundColor: 'black'}}/>
              <ListItem>
                <ListItemIcon>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                    height={40}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="C# COMPLETO Programação Orientada a Objetos + Projetos"
                  secondary={
                    <a href="https://www.udemy.com/certificate/UC-d5b456b7-9b02-4f95-a110-18ac6eb8cc01/">
                      Link do Certificado
                    </a>
                  }
                />
              </ListItem>
              <Divider sx={{backgroundColor: 'black'}}/>
              <ListItem>
                <ListItemIcon>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
                    height={40}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="INICIANTE Desenvolvimento de Jogos! Rápido, Fácil e Direto"
                  secondary={<a href={listUrl.urlJogos}>Link do Certificado</a>}
                />
              </ListItem>
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
  );
}

export default ListaCertificados;
