import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@/styles/globals.scss";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import store from "./stores/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={3000}
      >
        <App />
      </SnackbarProvider>
    </Provider>
  </StrictMode>,
);
