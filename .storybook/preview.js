import React from "react";
import { addDecorator } from "@storybook/react";
import Center from "../src/components/Center/Center";
import { ThemeProvider, theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

// addDecorator((story) => <Center>{story()}</Center>);

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Box>
        <Story />
      </Box>
    </ThemeProvider>
  ),
];
