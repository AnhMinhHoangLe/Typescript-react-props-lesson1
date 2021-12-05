import React from "react";
type FooterProps = {
  children: string;
};
export const Footer = (props: FooterProps) => {
  return (
    <div>
      <h2>{props.children}</h2>
    </div>
  );
};
