import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import logo from "../images/logo.jpeg";
import scripturesData from "../static/scriptures.json";
import { Scripture } from "../types";
import { hashStringToIndex } from "../utils";
import Layout from "../components/Layout";
import NameInput from "../components/NameInput";
import ScriptureDisplay from "../components/ScriptureDisplay";
import Footer from "../components/Footer";
import { Seo } from "../components/Seo";

const scriptures: Scripture[] = scripturesData;

const IndexPage: React.FC<PageProps> = () => {
  const [name, setName] = React.useState<string>("");
  const [currentScripture, setCurrentScripture] = React.useState<Scripture>(
    scriptures[0]
  );

  React.useEffect(() => {
    if (!name) return;
    const currentYear = new Date().getFullYear();
    const index = hashStringToIndex(name + currentYear, scriptures.length);
    setCurrentScripture(scriptures[index]);
  }, [name]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center space-y-6">
        <img
          src={logo}
          alt="Logo"
          className="w-24 h-24 rounded-full border-4 border-gray-200 shadow-lg object-cover"
        />
        {name ? (
          <ScriptureDisplay name={name} scripture={currentScripture} />
        ) : (
          <NameInput onNameSubmit={setName} />
        )}
      </div>
      <Footer />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <Seo>
    <script
      src="https://kit.fontawesome.com/24dd8c965e.js"
      crossOrigin="anonymous"
    ></script>
  </Seo>
);
