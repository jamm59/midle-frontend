"use client";
//import Button from "@mui/material/Button";
//import ButtonGroup from "@mui/material/ButtonGroup";
export default function Code({ codeFile }) {
  return (
    <>
      <div className="output relative col-span-2 flex flex-col items-center after:justify-around">
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
