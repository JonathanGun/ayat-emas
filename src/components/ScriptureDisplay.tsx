import * as React from "react";
import { toPng } from "html-to-image";
import { Scripture } from "../types";

interface ScriptureDisplayProps {
  name: string;
  scripture: Scripture;
}

const SHARE_TITLE = "Ayat Emas - JKI Puri Marina Semarang";
const SHARE_TEXT = "Ini ayat emasku tahun ini, yuk cek ayat emasmu juga!";
const SHARE_URL = "https://ayat-emas-jpm.vercel.app/";

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

      // Try Web Share API first (for mobile)
      if (navigator.share) {
        const blob = await (await fetch(dataUrl)).blob();
        const file = new File([blob], `ayat-emas-${name}.png`, {
          type: blob.type,
        });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: SHARE_TITLE,
            text: `${SHARE_TEXT}\n${SHARE_URL}`,
            files: [file],
          });
          return;
        }
      }

      // Fallback to download
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
      <div
        className="max-w-[80%] min-h-72 flex flex-col items-center justify-center text-center space-y-2 border-4 p-6"
        style={{
          borderImage: "linear-gradient(to bottom right, #C0C0C0, #FFD700) 1",
        }}
      >
        <p className="text-xl">{scripture.verse}</p>
        <p className="text-md">{scripture.text}</p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <button
          id="download-btn"
          className="rounded-lg p-2 px-4 bg-white/10 border-2 border-white hover:bg-white hover:text-[#ffffff] transition-all duration-300 flex items-center justify-center space-x-2"
          onClick={screenshotHandler}
        >
          <i className="fa fa-share-alt" aria-hidden="true"></i>
          <p>Simpan / Bagikan</p>
        </button>
      </div>
      <div className="flex flex-col items-center justify-center text-center font-cursive text-xl leading-relaxed max-w-[80%]">
        <p>Merry Christmas &</p>
        <p>Happy New Year</p>
      </div>
    </div>
  );
};

export default ScriptureDisplay;
