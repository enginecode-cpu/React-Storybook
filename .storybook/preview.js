import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { withConsole } from "@storybook/addon-console";
import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withA11y } from "@storybook/addon-a11y";

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withKnobs);
addDecorator(withA11y);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
