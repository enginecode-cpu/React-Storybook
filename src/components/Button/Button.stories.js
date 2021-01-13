import React from "react";
import Button from "./Button";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Form/Button",
  component: Button,
};

export const Primary = () => <Button varient="primary">Primary</Button>;
export const Secondary = () => <Button varient="secondary">Secondary</Button>;
export const Success = () => <Button varient="success">Success</Button>;
export const Danger = () => <Button varient="danger">Danger</Button>;
