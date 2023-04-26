import "./style.css";
import Perfil from "../Components/Perfil/Perfil";
import Infos from "../Components/Infos/Infos";
import Repositorios from "../Components/Repositorios/Repositorios";
import { ThemeProvider, createTheme } from "@mui/material";

function App() {
  return (
    <div className="divContainer">
      <div className="divRow">
        <div className="divColumn">
          <Perfil />
          <Infos />
        </div>
        <div className="divRepositorios">
          <Repositorios />
        </div>
      </div>
    </div>
  );
}

export default App;
