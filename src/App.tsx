import React from "react";
import { Grommet, Heading, Main, CheckBox, Paragraph } from "grommet";
import { usePersistedState } from "hooks";
import * as serviceWorker from "./serviceWorkerRegistration";
import { StoreProvider } from "store";

function App() {
  const [darkModeOn, setDarkModeOn] = usePersistedState<boolean>(
    "darkModeOn",
    true,
  );

  serviceWorker.register();

  const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setDarkModeOn(target.checked);

  return (
    <StoreProvider>
      <Grommet themeMode={darkModeOn ? "dark" : "light"} full>
        {darkModeOn === undefined ? (
          <>Loading preferences...</>
        ) : (
          <Main
            background={darkModeOn ? "black" : "white"}
            pad="large"
            direction="column"
          >
            <Heading className="App-header">Hello World</Heading>
            <Paragraph>
              Edit <code>src/App.tsx</code> and save to reload.
            </Paragraph>
            <CheckBox
              value="darkMode"
              checked={darkModeOn}
              label="Use dark mode?"
              id="darkModeOn"
              name="darkModeOn"
              onChange={handleOnChange}
            />
          </Main>
        )}
      </Grommet>
    </StoreProvider>
  );
}

export default App;
