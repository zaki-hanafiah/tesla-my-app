import React from "react";
import logo from "./logo.svg";
import { usePersistedState } from "./hooks/usePersistedState";
import "./App.css";
import * as serviceWorker from "./serviceWorkerRegistration";

function App() {
  const [darkModeOn, setDarkModeOn] = usePersistedState<boolean>(
    "darkModeOn",
    true,
  );

  serviceWorker.register();

  const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setDarkModeOn(target.checked);

  const styles = {
    ...(darkModeOn
      ? {
          backgroundColor: "black",
          color: "white",
        }
      : {
          backgroundColor: "white",
          color: "black",
        }),
  };

  return (
    <div className="App">
      {darkModeOn === undefined ? (
        <>Loading preferences...</>
      ) : (
        <>
          <header className="App-header" style={styles}>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
              <input
                type="checkbox"
                value="darkMode"
                checked={darkModeOn}
                id="darkModeOn"
                name="darkModeOn"
                style={{ width: "3rem", height: "3rem" }}
                onChange={handleOnChange}
              />
              <label htmlFor="darkModeOn">Use dark mode?</label>
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </>
      )}
    </div>
  );
}

export default App;
