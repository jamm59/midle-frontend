"use client";
import Output from "../components/Output";
import Editor from "@monaco-editor/react";
import { useRef } from "react";
export default function Home() {
  const codeFile = `# This is a comment testing the code
# This is another comment testing the code
def evenNumbers(start:int, end:int, step:int):
  for i in range(start, end, step)
      if not i % 2:
          yield i
  return "No even numbers found!"`;
  const codeLanguage = "PYTHON";

  const imgRef = useRef(null);
  const navRef = useRef(null);

  const toggleCSSclasses = (el, cls) =>
    cls.forEach((cl) => el.classList.toggle(cl));

  const toggleChildrenclasses = (el, cl) => {
    el.querySelectorAll("div").forEach((child) => {
      child.classList && child.classList.toggle(cl);
    });
  };
  const handleNavClick = () => {
    const classNames = ["w-[40%]", "h-[95%]"];
    navRef.current ? toggleCSSclasses(navRef.current, classNames) : undefined;
    navRef.current
      ? toggleChildrenclasses(navRef.current, "hidden")
      : undefined;
  };

  return (
    <>
      <div
        className="absolute inset-0 grid grid-cols-2 gap-5
      bg-gray-900 md:h-fit md:grid-cols-1 md:grid-rows-2"
      >
        <div className="flex h-full flex-col items-center justify-between">
          <CodeEditor codeFile={codeFile} />
          <div className="grid h-[20%] min-h-fit w-full place-items-center font-lilita text-3xl font-black leading-loose text-white">
            <span className="mx-3">{codeLanguage}</span>
          </div>
        </div>
        <div className="h-fit w-fit bg-gray-900">
          <Output
            codeFile={codeFile}
            codeLanguage={codeLanguage}
            className={""}
            label={false}
          />
          <div className="grid h-[20%] min-h-fit w-full place-items-center font-lilita text-3xl font-black leading-loose text-white">
            <span className="mx-3">OUTPUT</span>
          </div>
        </div>
      </div>
      <nav
        ref={navRef}
        onClick={handleNavClick}
        className="fixed bottom-5 right-5 flex flex-col items-start justify-start rounded-md
         bg-white px-5 py-2 font-lilita text-black transition-all duration-500 ease-in-out"
      >
        <MenuItem children={"fontSize"} />
        <MenuItem children={"font"} />
        <MenuItem children={"about"} />
        <MenuItem children={"exit"} />
        <img src="/menu-bar.png" className="mt-auto h-5 w-5" ref={imgRef} />
      </nav>
    </>
  );
}

function CodeEditor({ codeFile }) {
  const editorOptions = {
    fontSize: 16,
    fontFamily: "system ui",
    theme: "vs-light",
  };
  return (
    <Editor
      className="ml-5 mt-5 rounded-lg bg-white p-2 text-lg md:ml-0 md:mt-0 md:rounded-none md:rounded-r-lg md:py-5"
      height="85%"
      width="100%"
      defaultLanguage="python"
      value={codeFile}
      options={editorOptions}
    />
  );
}

function MenuItem({ children }) {
  return (
    <div className="mb-3 hidden w-[40%] rounded-md bg-gray-900 p-3 text-white shadow-md">
      {children}
    </div>
  );
}
