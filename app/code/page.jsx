"use client";
import Button from "../components/Button";
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
      <div className="absolute inset-0 grid grid-cols-2 ">
        <div className="flex h-full flex-col items-center justify-between bg-gray-900">
          <CodeEditor codeFile={codeFile} />
          <div className="h-fit w-full text-center font-lilita text-3xl font-black leading-loose text-white">
            <span className="mx-3">{codeLanguage}</span>
          </div>
        </div>
        <div className="grid place-items-center bg-gray-900 pt-5">
          <Output codeFile={codeFile} class_name={"w-full"} />
        </div>
      </div>
      <nav className="fixed bottom-5 right-5 grid place-items-center rounded-md bg-white px-5 py-2 font-lilita text-black">
        nav
      </nav>
    </>
  );
}

function CodeEditor({ codeFile }) {
  const editorOptions = {
    fontSize: 18,
    fontFamily: "Consolas",
    theme: "vs-light",
  };
  return (
    <Editor
      className="bg-gray-900 p-4 text-lg"
      height="85%"
      width="100%"
      defaultLanguage="python"
      value={codeFile}
      options={editorOptions}
    />
  );
}
