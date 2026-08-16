import {
    Box, Button, Card, CardBody, CardFooter, CardHeader,
    CheckBox,
    Grommet,
    Heading,
    Main as MainWrapper,
    Paragraph,
} from "grommet";

import { ShareOption, Favorite } from 'grommet-icons'
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
            <Box>
                <Card  height="small" width="small" background="light-1">
                    <CardHeader pad="medium">Header</CardHeader>
                    <CardBody pad="medium">Body</CardBody>
                    <CardFooter pad={{horizontal: "small"}} background="light-2">
                        <Button
                            icon={<Favorite color="red" />}
                            hoverIndicator
                        />
                        <Button icon={<ShareOption color="plain" />} hoverIndicator />
                    </CardFooter>
                </Card>
            </Box>
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
