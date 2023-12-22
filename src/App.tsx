import React from "react";
import { Grommet, Heading, Main, CheckBox } from "grommet";
import { usePersistedState } from "./hooks/usePersistedState";
import * as serviceWorker from "./serviceWorkerRegistration";
import { Paragraph } from "grommet/es6";

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
    <Grommet themeMode={darkModeOn ? "dark" : "light"} full={true}>
      {darkModeOn === undefined ? (
        <>Loading preferences...</>
      ) : (
        <Main background={darkModeOn ? "black" : "white"} pad="large">
          <Heading className="App-header" style={styles}>
            Hello World
          </Heading>
          <Paragraph>
            Edit <code>src/App.tsx</code> and save to reload.
          </Paragraph>
          <Paragraph>
            <CheckBox
              value="darkMode"
              checked={darkModeOn}
              label="Use dark mode?"
              id="darkModeOn"
              name="darkModeOn"
              onChange={handleOnChange}
            />
          </Paragraph>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Main>
      )}
    </Grommet>
  );
}

export default App;
