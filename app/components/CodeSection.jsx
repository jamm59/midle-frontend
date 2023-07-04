import Code from "./Code";
import Output from "./Output";
export default function CodeSection({ codeFile, codeLanguage }) {
  return (
    <>
      <div className="relative grid h-[120vh] w-full place-items-center sm:p-1">
        <div
          className="grid h-[400px] w-[950px] grid-cols-4 overflow-hidden rounded-md shadow-2xl sm:h-full sm:w-full
        sm:grid-cols-1 sm:grid-rows-2 sm:gap-4 md:overflow-visible lg:h-[60%] lg:w-[70%]"
        >
          <Code codeFile={codeFile} codeLanguage={codeLanguage} />
          <Output codeFile={codeFile} codeLanguage={codeLanguage} />
        </div>
      </div>
    </>
  );
}
