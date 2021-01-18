import React from "react";
import Button from "@material-ui/core/Button";
import { action, actions } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Material/Button",
  component: Button,
};

export const Success = () => (
  <Button variant="contained" color="primary" onClick={action("Click Handler")}>
    Success
  </Button>
);

export const Danger = () => (
  <Button
    variant="contained"
    color="secondary"
    {...actions("onClick", "onMouseOver")}
  >
    Danger
  </Button>
);

export const Log = () => (
  <Button
    variant="contained"
    onClick={() => console.log("clicked", process.env.STORYBOOK_THEME)}
  >
    Log
  </Button>
);

export const knobs = () => (
  <Button disabled={boolean("Disabled", false)} variant="contained">
    {text("Label", "Button Label")}
  </Button>
);
