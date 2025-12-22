import * as React from "react";
import { toPng } from "html-to-image";
import { Scripture } from "../types";

interface ScriptureDisplayProps {
  name: string;
  scripture: Scripture;
}

const ScriptureDisplay: React.FC<ScriptureDisplayProps> = ({ name, scripture }) => {
  const screenshotHandler = async () => {
    const node = document.getElementById("shareable-content");
    if (!node) return;

    try {
      const dataUrl = await toPng(node, {
        filter: (node) => {
          return node.id !== "download-btn";
        },
      });
      const link = document.createElement("a");
      link.download = `ayat-emas-${name}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Failed to capture screenshot", err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <div className="flex flex-col items-center justify-center">
        <p className="text-lg">
          Halo, <b>{name}</b>!
        </p>
        <p className="text-lg">Ini Ayat emasmu :</p>
      </div>
      <div className="max-w-[80%] min-h-72 flex flex-col items-center justify-center text-center space-y-2 border-2 p-6">
        <p className="text-xl">{scripture.verse}</p>
        <p className="text-md">{scripture.text}</p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <button
          id="download-btn"
          className="rounded-lg p-2 px-4 bg-white/10 border-2 border-white hover:bg-white hover:text-[#0a4b51] transition-all duration-300 flex items-center justify-center space-x-2"
          onClick={screenshotHandler}
        >
          <i className="fa fa-download" aria-hidden="true"></i>
          <p>Download</p>
        </button>
      </div>
      <div className="flex flex-col items-center justify-center text-center font-cursive text-xl max-w-[70%]">
        <p>Merry Christmas &</p>
        <p>Happy New Year</p>
      </div>
    </div>
  );
};

export default ScriptureDisplay;
