"use client";
import Navigation from "../components/Navigation";
import Output from "../components/Output";
import Editor from "@monaco-editor/react";
export default function Home() {
  const codeFile = `# This is a comment testing the code
# This is another comment testing the code
def evenNumbers(start:int, end:int, step:int):
  for i in range(start, end, step)
      if not i % 2:
          yield i
  return "No even numbers found!"`;
  const codeLanguage = "PYTHON";

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
      <Navigation />
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
