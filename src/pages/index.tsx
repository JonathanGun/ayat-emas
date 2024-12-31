import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import slinger from "../images/slinger.webp";
import scripturesData from "../static/scriptures.json";
import { domToPng } from "modern-screenshot";

type Scripture = {
  verse: string;
  text: string;
};

function hashStringToIndex(s: string, n: number): number {
  let hash = 0;

  for (let i = 0; i < s.length; i++) {
    hash = (hash * 31 + s.charCodeAt(i)) % 0x7fffffff;
  }

  return Math.abs(hash) % n;
}

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

  const screenshotHandler = async () => {
    const dataUrl = await domToPng(document.querySelector("body")!);
    const link = document.createElement("a");
    link.download = "screenshot.png";
    link.href = dataUrl;
    link.click();
  };

  return (
    <main className="min-h-screen min-w-screen flex items-center justify-center p-0 bg-[#0a4b51]">
      <img
        src={slinger}
        className="w-full object-cover absolute top-0 max-w-md"
        alt="slinger"
      ></img>
      <div className="min-h-screen min-w-screen flex flex-col items-center justify-center relative tracking-wider text-sky-100 space-y-6 max-w-md">
        <div>
          {name ? (
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="flex flex-col items-center justify-center">
                <p className="text-lg">
                  Halo, <b>{name}</b>!
                </p>
                <p className="text-lg">Ini Ayat emasmu :</p>
              </div>
              <div className="max-w-[80%] min-h-72 flex flex-col items-center justify-center text-center space-y-2 border-2 p-6">
                <p className="text-xl">{currentScripture.verse}</p>
                <p className="text-md">{currentScripture.text}</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <button
                  className="rounded-lg p-2 px-4 bg-transparent border-2 flex items-center justify-center space-x-2"
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
          ) : (
            <div className="flex flex-col items-center justify-center space-y-4">
              <input
                id="input-name"
                className="rounded-md p-3 text-black"
                type="text"
                placeholder="Nama"
              />
              <button
                className="rounded-xl p-2 px-4 bg-transparent border-2 text-black"
                onClick={(e) => {
                  e.preventDefault();
                  setName(
                    (document.getElementById("input-name") as HTMLInputElement)
                      .value
                  );
                }}
              >
                <p className="text-sky-50">Ambil Ayat Emas</p>
              </button>
            </div>
          )}
        </div>
        <footer className="flex flex-col items-center justify-center space-y-2 font-light">
          <p className="text-sm">@jkipurimarina</p>
          <p className="text-xs">Puri Anjasmoro blok G1 no 15 Semarang</p>
        </footer>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <script
      src="https://kit.fontawesome.com/24dd8c965e.js"
      crossOrigin="anonymous"
    ></script>
    <title>Ayat Emas</title>
  </>
);
