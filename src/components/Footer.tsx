import * as React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center space-y-2 font-light">
      <a
        href="https://www.instagram.com/jkipurimarina/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-sm hover:text-white transition-colors duration-200"
      >
        <i className="fab fa-instagram text-lg"></i>
        <span>@jkipurimarina</span>
      </a>
      <p className="text-xs">Puri Anjasmoro Blok G1 no.15, Semarang</p>
    </footer>
  );
};

export default Footer;
