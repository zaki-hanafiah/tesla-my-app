import {
  CheckBox,
  Grommet,
  Heading,
  Main as MainWrapper,
  Paragraph,
} from "grommet";
import React, { ReactNode, useContext } from "react";
import { StoreContext } from "store";

type MainProps = {
  children?: ReactNode;
};
const Main = ({ children }: MainProps) => {
  const { darkModeOn, setDarkModeOn } = useContext(StoreContext);

  const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setDarkModeOn(target.checked);

  return (
    <Grommet themeMode={darkModeOn ? "dark" : "light"} full>
      {darkModeOn === undefined ? (
        <>Loading preferences...</>
      ) : (
        <MainWrapper
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
          {children}
        </MainWrapper>
      )}
    </Grommet>
  );
};
export default Main;
