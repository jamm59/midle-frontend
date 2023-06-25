"use client";
import Button from "../components/Button";
import Output from "../components/Output";
import Editor from "@monaco-editor/react";
export default function Home() {
  //alert("This will not work with files longer than five lines!");
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
      <div className="absolute inset-0 grid grid-cols-2 bg-gray-900">
        <div className="flex h-full flex-col items-center justify-between">
          <CodeEditor codeFile={codeFile} />
          <div className="grid h-[20%] min-h-fit w-full place-items-center font-lilita text-3xl font-black leading-loose text-white">
            <span className="mx-3">{codeLanguage}</span>
          </div>
        </div>
        <div className="flex h-full flex-col items-center justify-between pt-5">
          <Output
            codeFile={codeFile}
            codeLanguage={codeLanguage}
            class_name={""}
            label={false}
          />
          <div className="grid h-[20%] min-h-fit w-full place-items-center font-lilita text-3xl font-black leading-loose text-white">
            <span className="mx-3">OUTPUT</span>
          </div>
        </div>
      </div>
      <nav className="fixed bottom-5 right-5 grid place-items-center rounded-md px-5 py-2 font-lilita text-black">
        <Button content={"navigation"} />
      </nav>
    </>
  );
}

function CodeEditor({ codeFile }) {
  const editorOptions = {
    fontSize: 18,
    fontFamily: "system ui",
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
