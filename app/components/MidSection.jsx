import Button from "./Button";
export default function MidSection() {
  return (
    <>
      <section
        className="grid h-screen place-items-center before:absolute before:z-10 before:h-[70%] before:w-[98%] 
   before:skew-y-[-2deg] before:rounded-lg before:bg-gradient-to-r before:from-rose-600 before:via-gray-900 before:to-teal-500 before:shadow-2xl
   before:transition-all before:duration-500 hover:before:skew-y-[0deg] hover:before:cursor-pointer"
      >
        <div className="z-20 grid place-items-center p-2">
          <h3 className="font-lilita text-[2rem] font-bold text-white">
            It's not a compiler!
          </h3>
          <p className="my-10 w-[60%] text-left font-openSans">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus modi
            sequi repudiandae, exercitationem repellat ipsa, excepturi dolor
            mollitia facere, ipsum harum ut. Numquam perferendis iusto
            laboriosam dolor cum nam ex?
          </p>
          <div className="w-[50%]">
            <Button content={"Try it out!"} />
          </div>
        </div>
      </section>
    </>
  );
}
