import React from "react";
import Button from "@material-ui/core/Button";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Material/Button",
  component: Button,
};

export const Success = () => (
  <Button variant="contained" color="primary">
    Success
  </Button>
);
export const Danger = () => (
  <Button variant="contained" color="secondary">
    Danger
  </Button>
);
