import React from "react";
import * as serviceWorker from "./serviceWorkerRegistration";
import { StoreProvider } from "store";
import Main from "components/main";

function App() {
  serviceWorker.register();

  return (
    <StoreProvider>
          <Main />
    </StoreProvider>
  );
}

export default App;
