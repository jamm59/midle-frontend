"use client";
import { twMerge } from "tailwind-merge";
import { useEffect } from "react";
import { hljs } from "../../lib/stuff";
import "highlight.js/styles/atom-one-dark.css";

export default function Code({ codeFile, class_name }) {
  class_name = class_name
    ? twMerge(
        "output relative col-span-2 flex h-full flex-col items-center",
        class_name
      )
    : "output relative col-span-2 flex h-full flex-col items-center";
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <>
      <div className={class_name}>
        <div className="px-1">
          {codeFile.split("\n").map((line, index) => {
            return (
              <div
                style={{
                  "--steps-character": line ? line.length : 0,
                }}
                className="line relative z-10 before:absolute before:inset-0 
                before:z-20 before:animate-typing before:bg-[var(--background-main)]"
                key={index}
              >
                <pre
                  className="line-p hljs"
                  style={{ background: "var(--background-main)" }}
                >
                  <code className="language-python">{line}</code>
                </pre>
              </div>
            );
          })}
        </div>
        <h3 className="absolute bottom-5 grid h-16 place-items-center font-lilita text-3xl font-black tracking-wide">
          Output
        </h3>
      </div>
    </>
  );
}
