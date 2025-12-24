import * as React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main
      id="shareable-content"
      className="min-h-screen min-w-screen flex items-center justify-center p-0 bg-theme-bg"
    >
      <div className="min-h-screen min-w-screen flex flex-col items-center justify-center relative tracking-wider text-sky-100 space-y-6 max-w-md">
        {children}
      </div>
    </main>
  );
};

export default Layout;
