import { BrowserRouter as Router } from "react-router-dom";
import RenderRouter from "./routers";
import SnackbarUtilsConfigurator from "./hooks/useSnackbar";

function App() {
  return (
    <Router>
      <SnackbarUtilsConfigurator />
      <RenderRouter />
    </Router>
  );
}

export default App;
