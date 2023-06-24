import Button from "./Button";
export default function Header() {
  return (
    <header className="flex h-screen w-full min-w-fit flex-col items-end justify-center sm:grid md:place-items-center">
      <div
        className="relative right-[10%] flex h-fit min-h-[80%] w-[70%] flex-col justify-center rounded-md bg-[#F4F9F9] px-4 drop-shadow-2xl
      md:grid md:w-full md:place-items-center"
      >
        <div className="absolute left-5 top-5 font-gasoek text-3xl font-extrabold text-gray-900 md:block">
          Logo
        </div>
        <h1 className="h-fit min-h-[60%] w-[55%] text-left text-5xl font-black sm:text-3xl">
          <span className="min-h-fit bg-gradient-to-r from-pink-500 to-teal-500 bg-clip-text font-moirai text-transparent">
            Code in any Spoken Language without worrying. Let us do the work for
            you.
          </span>
        </h1>
        <img
          className="transiton-all absolute right-[20%] top-[20%] animate-bounce rounded-xl bg-rose-500 drop-shadow-lg"
          src={"/languages.png"}
          alt="code"
          width={150}
          height={150}
        />
        <div className="h-15 absolute bottom-10 right-0 flex w-[60%] justify-around font-montserrat text-black md:block">
          <Button content={"Try it!"} className={""} />
          <Button
            content={"Get Started"}
            className={"!bg-rose-500 text-white"}
          />
        </div>
      </div>
    </header>
  );
}
