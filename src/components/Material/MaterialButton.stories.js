import React from "react";
import Button from "@material-ui/core/Button";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Material/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
};

const Templates = (args) => <Button {...args} />;

export const Success = Templates.bind({});
Success.args = {
  variant: "contained",
  color: "primary",
  children: "Success",
};

export const Danger = Templates.bind({});
Danger.args = {
  variant: "contained",
  color: "secondary",
  children: "Danger",
};
