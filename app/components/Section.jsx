//import { twMerge } from "tailwind-merge";
export default function Section() {
  const color = ["blue", "green", "yellow", "teal"][
    Math.floor(Math.random() * 4)
  ];
  return (
    <section className="m-auto grid h-screen w-[98%] grid-cols-3 overflow-hidden rounded-lg bg-gray-900 p-3 shadow-2xl">
      <div className="grid place-items-center rounded-md bg-rose-600">
        <div className="grid place-items-center p-2">
          <h3 className="font-lilita text-[2rem] font-bold text-white">
            How does it work?
          </h3>
          <p className="mb-10 w-[90%] text-left font-montserrat">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus modi
            sequi repudiandae, exercitationem repellat ipsa, excepturi dolor
            mollitia facere, ipsum harum ut. Numquam perferendis iusto
            laboriosam dolor cum nam ex?
          </p>
          <h3 className="font-lilita text-[2rem] font-bold text-white">
            It's just similation
          </h3>
          <p className="w-[90%] text-left font-montserrat">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus modi
            sequi repudiandae, exercitationem repellat ipsa, excepturi dolor
            mollitia facere, ipsum harum.
          </p>
        </div>
      </div>
      <div
        className="grid h-[80%] place-items-center rounded-md 
      font-lilita text-[3rem] font-black text-white"
      >
        <span className="text-green-500">PYTHON,</span>
        <span className="text-yellow-500">JAVASCRIPT,</span>
        <span className="text-sky-500">GOLANG,</span>
        <span className="text-rose-500">JAVA,</span>
        <span>AND MORE ...</span>
      </div>
      <div
        className="grid place-items-center rounded-md bg-teal-500 p-3 pb-7"
        //className={`bg-${color}-500 grid place-items-center p-3 pb-7 rounded-md`}
      >
        <div className="grid place-items-center p-2 ">
          <h3 className="font-lilita text-[2rem] font-bold text-white">
            It's not a compiler!
          </h3>
          <p className="mb-10 w-[90%] text-left font-montserrat">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus modi
            sequi repudiandae, exercitationem repellat ipsa, excepturi dolor
            mollitia facere, ipsum harum ut. Numquam perferendis iusto
            laboriosam dolor cum nam ex?
          </p>
          <h3 className="font-lilita text-[2rem] font-bold text-white">
            It's just similation
          </h3>
          <p className="w-[90%] text-left font-montserrat">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus modi
            sequi repudiandae, exercitationem repellat ipsa, excepturi dolor
            mollitia facere, ipsum harum.
          </p>
        </div>
      </div>
    </section>
  );
}
