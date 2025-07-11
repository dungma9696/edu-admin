import { BrowserRouter as Router } from "react-router-dom";
import RenderRouter from "./routers";
import SnackbarUtilsConfigurator from "./hooks/useSnackbar";
import { useAppDispatch } from "./stores";
import { useLayoutEffect } from "react";
import { getProfileRequest } from "./features/profile/profile.action";

function App() {
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(getProfileRequest());
    }
  }, []);

  return (
    <Router>
      <SnackbarUtilsConfigurator />
      <RenderRouter />
    </Router>
  );
}

export default App;
