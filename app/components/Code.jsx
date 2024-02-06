"use client";
//import { marked } from "marked";
import { useEffect } from "react";
import "highlight.js/styles/atom-one-dark.css";
import { hljs, handlePusherClick } from "../../lib/stuff";

export default function Code({ codeFile, codeLanguage }) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <div
      className="relative col-span-2 flex flex-col items-center border-[var(--background-main)] bg-gray-900 px-2 py-3 sm:h-full
    sm:rounded-md "
    >
      <div className="my-2 flex w-full flex-col items-center rounded-md px-1 font-mono">
        {codeFile.split("\n").map((line, index) => {
          return (
            <div className="line" key={index}>
              <span className="line-span">{index + 1}</span>
              <pre
                className="line-p hljs"
                style={{ background: "var(--background-main)" }}
              >
                <code className={`language-${codeLanguage.toLowerCase()}`}>
                  {line}
                </code>
              </pre>
            </div>
          );
        })}
        <div className="absolute bottom-5 flex w-full grid-cols-2 items-center justify-around text-3xl leading-loose text-white">
          <span className="font-lilita">{codeLanguage}</span>
          <button
            className="tile hover:translate-x-1"
            onClick={handlePusherClick}
          >
            <img src="/play.png" width={15} height={15} />
            <span className="font-openSans text-sm text-black">Run</span>
          </button>
        </div>
      </div>
    </div>
  );
}
