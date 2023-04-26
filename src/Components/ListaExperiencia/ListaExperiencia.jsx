import React from 'react'
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

function ListaExperiencia() {
  return (
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Experiencia Profissional</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <List dense={false}>
              <ListItem>
                <ListItemText
                  primary='Analista Programador I'
                  secondary='Techno Software ltda. - Desenvolvedor FullStack - Back-end Java / Front-End ReactJS - Manutenção nos Sistemas ABE e Luft Logistics'
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary='Atendente de Serviço Especializado'
                  secondary='Atendimento Especializado em divergência de valores e produtos NET / CLARO'
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary='Estagíario em Informatica'
                  secondary='Manutenção em desktops e notebooks'
                />
              </ListItem>
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
  )
}

export default ListaExperiencia