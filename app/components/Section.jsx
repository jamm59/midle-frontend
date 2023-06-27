import { twMerge } from "tailwind-merge";
export default function Section() {
  const color = [
    "bg-yellow-500",
    "bg-sky-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-teal-500",
  ][Math.floor(Math.random() * 5)];
  const styles = twMerge("grid place-items-center rounded-md p-3 pb-7", color);

  return (
    <section
      className="m-auto grid h-fit min-h-screen w-[98%] grid-cols-3 overflow-hidden rounded-lg bg-gray-900 p-3 shadow-2xl
    sm:grid-cols-1 sm:grid-rows-3"
    >
      <div className="grid place-items-center rounded-md bg-rose-600">
        <div className="grid place-items-center p-2">
          <h3 className="font-lilita text-[2rem] font-bold text-white">
            How does it work?
          </h3>
          <p className="mb-10 w-[90%] text-left font-montserrat sm:text-center sm:font-openSans sm:text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus modi
            sequi repudiandae, exercitationem repellat ipsa, excepturi dolor
            mollitia facere, ipsum harum ut. Numquam perferendis iusto
            laboriosam dolor cum nam ex?
          </p>
          <h3 className="font-lilita text-[2rem] font-bold text-white">
            It's just similation
          </h3>
          <p className="w-[90%] text-left font-montserrat sm:text-center sm:font-openSans sm:text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus modi
            sequi repudiandae, exercitationem repellat ipsa, excepturi dolor
            mollitia facere, ipsum harum.
          </p>
        </div>
      </div>
      <div
        className="grid h-[80%] place-items-center rounded-md 
      font-lilita text-[3rem] font-black text-white sm:h-full"
      >
        <span className="text-green-500">PYTHON,</span>
        <span className="text-yellow-500">JAVASCRIPT,</span>
        <span className="text-sky-500">GOLANG,</span>
        <span className="text-rose-500">JAVA,</span>
        <span>AND MORE ...</span>
      </div>
      <div className={styles}>
        <div className="grid place-items-center p-2 ">
          <h3 className="font-lilita text-[2rem] font-bold text-white">
            It's not a compiler!
          </h3>
          <p className="mb-10 w-[90%] text-left font-montserrat sm:text-center sm:font-openSans sm:text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus modi
            sequi repudiandae, exercitationem repellat ipsa, excepturi dolor
            mollitia facere, ipsum harum ut. Numquam perferendis iusto
            laboriosam dolor cum nam ex?
          </p>
          <h3 className="font-lilita text-[2rem] font-bold text-white">
            It's just similation
          </h3>
          <p className="w-[90%] text-left font-montserrat sm:text-center sm:font-openSans sm:text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus modi
            sequi repudiandae, exercitationem repellat ipsa, excepturi dolor
            mollitia facere, ipsum harum.
          </p>
        </div>
      </div>
    </section>
  );
}
