import React from "react";
import { addDecorator } from "@storybook/react";
import { withConsole } from "@storybook/addon-console";
import { withKnobs } from "@storybook/addon-knobs";

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withKnobs);
