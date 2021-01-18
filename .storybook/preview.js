import React from "react";
import { addDecorator } from "@storybook/react";
import { withConsole } from "@storybook/addon-console";

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
