import * as React from "react";
import slinger from "../images/slinger.webp";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main
      id="shareable-content"
      className="min-h-screen min-w-screen flex items-center justify-center p-0 bg-theme-bg"
    >
      <img
        src={slinger}
        className="w-full object-cover absolute top-0 max-w-md"
        alt="slinger"
      ></img>
      <div className="min-h-screen min-w-screen flex flex-col items-center justify-center relative tracking-wider text-sky-100 space-y-6 max-w-md">
        {children}
      </div>
    </main>
  );
};

export default Layout;
