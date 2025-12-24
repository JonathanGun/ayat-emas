import * as React from "react";
import background from "../images/background_2025.png";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main
      id="shareable-content"
      className="min-h-screen min-w-screen flex items-center justify-center p-0 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="min-h-screen min-w-screen flex flex-col items-center justify-center relative tracking-wider text-sky-100 space-y-6 max-w-md z-10">
        {children}
      </div>
    </main>
  );
};

export default Layout;
