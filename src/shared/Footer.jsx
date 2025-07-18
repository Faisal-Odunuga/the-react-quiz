import React from "react";

const Footer = ({ children }) => {
  return (
    <footer className="flex justify-between flex-row-reverse">
      {children}
    </footer>
  );
};

export default Footer;
