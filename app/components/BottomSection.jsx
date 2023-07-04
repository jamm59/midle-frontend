import Button from "./Button";
export default function BottomSection() {
  return (
    <>
      <div
        className="d m-auto my-10 grid min-h-fit w-[98%] place-items-center
        rounded-lg bg-white py-6 shadow-2xl sm:bg-gradient-to-br sm:px-3"
      >
        <h3 className="font-lilita text-[2rem] font-bold text-black">
          It's not a compiler!
        </h3>
        <p className="my-10 w-[50%] text-left font-openSans text-black sm:w-full sm:text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus modi
          sequi repudiandae, exercitationem repellat ipsa, excepturi dolor
          mollitia facere, ipsum harum ut. Numquam perferendis iusto laboriosam
          dolor cum nam ex?
        </p>
        <a href="/code" className="min-h-fit w-[50%] sm:w-full">
          <Button
            content={"Code and see how it works!"}
            className={"w-fit bg-gray-900 px-5 text-white"}
          />
        </a>
      </div>
    </>
  );
}
