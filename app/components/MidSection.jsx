import Button from "./Button";
export default function MidSection() {
  return (
    <>
      <section
        className="sm:before:top-15 before:bg- relative grid h-screen place-items-center before:absolute before:z-10
   before:h-[70%] before:w-[98%] before:skew-y-[-2deg] before:rounded-lg before:shadow-2xl before:transition-all before:duration-500 hover:before:skew-y-[0deg]
     hover:before:cursor-pointer sm:py-[10%] sm:before:w-full sm:before:bg-gradient-to-br sm:before:to-gray-900 md:before:rounded-none"
      >
        <div className="z-20 grid place-items-center p-2">
          <h3 className="font-lilita text-[2rem] font-bold text-gray-900">
            It's not a compiler!
          </h3>
          <p className="my-10 w-[60%] text-left font-openSans text-black sm:w-full sm:text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus modi
            sequi repudiandae, exercitationem repellat ipsa, excepturi dolor
            mollitia facere, ipsum harum ut. Numquam perferendis iusto
            laboriosam dolor cum nam ex?
          </p>
          <div className="w-[50%]">
            <Button
              content={"Try it out!"}
              className={"bg-gray-900 text-white"}
            />
          </div>
        </div>
      </section>
    </>
  );
}
