import React from "react";

function Footer() {
  return (
    <footer className="my-5 pt-5 text-muted text-center text-small">
      <span>Directory Service © { new Date().getFullYear() }</span>
    </footer>
  );
}

export default Footer;
