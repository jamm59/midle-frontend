"use client";
//import { marked } from "marked";
import { useEffect } from "react";
import "highlight.js/styles/atom-one-dark.css";
import { hljs } from "../../lib/stuff";

export default function Code({ codeFile, codeLanguage }) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <div className="relative col-span-2 flex flex-col items-center border-[var(--background-main)] bg-white px-2 py-3">
      <div className="my-2 flex w-full flex-col items-center rounded-md px-1 font-mono">
        {codeFile.split("\n").map((line, index) => {
          return (
            <div className="line" key={index}>
              <span className="line-span">{index + 1}</span>
              <pre
                className="line-p hljs"
                style={{ background: "var(--background-main)" }}
              >
                <code className="language-python">{line}</code>
              </pre>
            </div>
          );
        })}
        <div className="absolute bottom-5 font-lilita text-3xl font-black leading-loose text-gray-900">
          {codeLanguage}
        </div>
      </div>
    </div>
  );
}
