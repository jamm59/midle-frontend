"use client";
import Navigation, { MenuItem } from "../components/Navigation";
import Output from "../components/Output";
import Editor from "@monaco-editor/react";
import { useState } from "react";
export default function Home() {
  const codeFile = `# This is a comment testing the code
# This is another comment testing the code
def evenNumbers(start:int, end:int, step:int):
  for i in range(start, end, step)
      if not i % 2:
          yield i
  return "No even numbers found!"`;
  const codeLanguage = "PYTHON";
  const [percentage, setPercentage] = useState(57);
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
        <div className="h-full min-h-fit w-full bg-gray-900">
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
      <Navigation>
        <MenuItem>
          <>
            <div>Font Size</div>
            <div className="flex items-center justify-center">
              <span onClick={() => setPercentage((percent) => percent - 1)}>
                -
              </span>
              <div class="mx-3 flex h-4 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                <div
                  className="flex flex-col justify-center overflow-hidden bg-blue-500 text-center text-xs text-white"
                  role="progressbar"
                  style={{ width: `${percentage}%` }}
                  aria-valuenow={percentage}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {percentage + "%"}
                </div>
              </div>
              <span onClick={() => setPercentage((percent) => percent + 1)}>
                +
              </span>
            </div>
          </>
        </MenuItem>
        <MenuItem>
          <details>
            <summary>Font</summary>
            <ul className="overflow-hidden px-2 py-1 font-mono">
              <li className="mr-3 bg-white p-2 text-black hover:bg-slate-200">
                Consolas
              </li>
              <li className="mr-3 bg-white p-2 text-black hover:bg-slate-200">
                Montserrat
              </li>
              <li className="mr-3 bg-white p-2 text-black hover:bg-slate-200">
                Open Sans
              </li>
              <li className="mr-3 bg-white p-2 text-black hover:bg-slate-200">
                Roboto
              </li>
            </ul>
          </details>
        </MenuItem>
        <MenuItem>
          <a href="/about">About </a>
        </MenuItem>
        <MenuItem>
          <a href="/">Home </a>
        </MenuItem>
        <MenuItem>
          <a href="/">Close </a>
        </MenuItem>
      </Navigation>
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
      className="ml-5 mt-5 rounded-lg bg-white p-2 text-lg sm:mt-7 md:ml-0 md:mt-0 md:rounded-none md:rounded-r-lg md:py-5"
      height="85%"
      width="100%"
      defaultLanguage="python"
      value={codeFile}
      options={editorOptions}
    />
  );
}
