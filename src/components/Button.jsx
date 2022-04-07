import React from "react";

import "./Button.css";

const STYLES = [
  "btn--primary",
  "btn--google",
  "btn--tesla",
  "btn--uber",
  "btn--windows",
  "btn--twitter",
  "btn--linkedin",
  "btn--netflix",
  "btn--amazon",
  "btn--mcdonalds",
  "btn--nvidia"
];

export const Button = ({ buttonStyle, name }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  return <button className={`btn ${checkButtonStyle}`}>{name}</button>;
};
