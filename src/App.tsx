import React from "react";
import { Grommet } from 'grommet';
import { usePersistedState } from "./hooks/usePersistedState";
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
      <Grommet themeMode={darkModeOn ? 'dark' : 'light'}>
      {darkModeOn === undefined ? (
        <>Loading preferences...</>
      ) : (
        <>
          <header className="App-header" style={styles}>
              Hello World
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
    </Grommet>
  );
}

export default App;
