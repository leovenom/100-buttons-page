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
  "btn--nvidia",
  "btn--nike",
  "btn--facebook",
  "btn-spotify",
  "btn--slack",
  "btn--lewagon",
  "btn--pier",
  "btn--samsung",
  "btn--burguer-king",
  "btn--sothebys",
  "btn--discord",
  "btn--notion"
];

export const Button = ({ buttonStyle, name }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  return <button className={`btn ${checkButtonStyle}`}>{name}</button>;
};
