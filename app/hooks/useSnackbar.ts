import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { setUseSnackbarRef } from "../utils/notistackUtils";

const SnackbarUtilsConfigurator = () => {
  const snackbar = useSnackbar();

  useEffect(() => {
    setUseSnackbarRef(snackbar);
  }, [snackbar]);

  return null;
};

export default SnackbarUtilsConfigurator;
