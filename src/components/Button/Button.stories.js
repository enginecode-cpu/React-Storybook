import React from "react";
import Button from "./Button";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Form/Button",
  component: Button,
};

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

const Templates = (args) => <Button {...args} />;

export const PrimaryA = Templates.bind({});
PrimaryA.args = {
  variant: "primary",
  children: "Primary Args",
};

export const LongPrimaryA = Templates.bind({});
LongPrimaryA.args = {
  ...PrimaryA.args,
  children: "Long Primary Args",
};

export const SecondaryA = Templates.bind({});
SecondaryA.args = {
  variant: "secondary",
  children: "Secondary Args",
};
