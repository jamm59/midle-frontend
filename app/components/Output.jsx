"use client";
import { twMerge } from "tailwind-merge";
import { useEffect } from "react";
import { hljs } from "../../lib/stuff";
import "highlight.js/styles/atom-one-dark.css";

export default function Code({
  codeFile,
  codeLanguage,
  class_name,
  label = true,
}) {
  const original =
    "output relative col-span-2 flex h-full flex-col items-center sm:w-full !overflow-hidden rounded-md";
  class_name = class_name ? twMerge(original, class_name) : original;
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
              <span className="line-span font-black">{">"}</span>
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
        {label ? (
          <div className="absolute bottom-5 font-lilita text-3xl font-black text-white">
            OUTPUT
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
