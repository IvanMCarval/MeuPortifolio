import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function ListaFormacao() {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Formação Acadêmica</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Universidade de Ribeirão Preto"
                secondary="Bacherelado em Engenharia de Software"
              />
              <ListItemText
                primary="Atividades"
                secondary="Monitor em Algoritimos e Programação"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="SENAI Engº Octavio Marcondes Ferraz"
                secondary="Curso Técnico em Eletroeletrônica"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Cento Educacional SESI-301"
                secondary="Ensino Fundamental e Médio"
              />
              <ListItemText
                primary="Atividades"
                secondary="Membro das Equipes de robótica em 2013, 2014 e 2015, 5° Torneio CE-SESI de Robótica (2013), OBR Olimpíada Brasileira de Robótica (2014-2015)"
              />
            </ListItem>
          </List>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default ListaFormacao;
