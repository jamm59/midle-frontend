"use client";
import { twMerge } from "tailwind-merge";
import { useEffect } from "react";
import { hljs } from "../../lib/stuff";
import "highlight.js/styles/atom-one-dark.css";

export default function Code({
  codeFile,
  codeLanguage,
  className,
  label = true,
}) {
  const original =
    "output relative col-span-2 flex h-full flex-col items-center sm:w-full !overflow-hidden rounded-md bg-orange-600";
  className = className ? twMerge(original, className) : original;
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <div
      className="relative col-span-2 flex flex-col items-center border-[var(--background-main)] bg-gray-900 px-2 py-3 sm:h-full
    sm:rounded-md "
    >
      <div className="my-2 flex w-full flex-col items-center rounded-md px-1 font-mono sm:px-0">
        {codeFile.split("\n").map((line, index) => {
          return (
            <div
              style={{
                "--steps-character": `${line.length + 1}`,
                "--animation-delay": `${index * 0.5}s`,
              }}
              className="line relative z-0 before:absolute before:inset-0
               before:z-30 before:animate-typing before:bg-[var(--background-main)]"
              key={index}
            >
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
