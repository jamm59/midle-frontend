import Code from "./Code";
import Output from "./Output";
import Button from "./Button";
export default function CodeSection({ codeFile, codeLanguage }) {
  return (
    <>
      <div className="relative grid h-screen w-full place-items-center bg-white">
        <div className="grid h-[450px] w-[950px] grid-cols-4 overflow-hidden rounded-md shadow-2xl">
          <Code codeFile={codeFile} codeLanguage={codeLanguage} />
          <Output codeFile={codeFile} />
        </div>
      </div>
      <BottomSection />
    </>
  );
}

function BottomSection() {
  return (
    <>
      <div
        className="m-auto mb-10 grid h-[60vh] min-h-fit w-[98%] place-items-center rounded-lg bg-gradient-to-r
      from-gray-900 via-gray-900 to-teal-500 py-5"
      >
        <h3 className="font-lilita text-[2rem] font-bold text-white">
          It's not a compiler!
        </h3>
        <p className="my-10 w-[50%] text-left font-openSans">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus modi
          sequi repudiandae, exercitationem repellat ipsa, excepturi dolor
          mollitia facere, ipsum harum ut. Numquam perferendis iusto laboriosam
          dolor cum nam ex?
        </p>
        <div className="w-[50%]">
          <Button content={"Code and see how it works!"} />
        </div>
      </div>
    </>
  );
}
