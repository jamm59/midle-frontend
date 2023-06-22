import Button from "./Button";
export default function Header() {
  return (
    <header className="flex h-screen flex-col items-end justify-center bg-white">
      <div className="relative right-[10%] flex h-4/5 w-[70%] flex-col justify-center rounded-md bg-[#F4F9F9] px-4 shadow-2xl">
        <div className="absolute left-5 top-5 font-gasoek text-3xl font-extrabold text-gray-900">
          Logo
        </div>
        <h1 className="h-[60%] w-[55%] text-left text-5xl font-black">
          <span className="bg-gradient-to-r from-pink-500 to-teal-500 bg-clip-text font-moirai text-transparent">
            Code in any Spoken Language without worrying. Let us do the work for
            you.
          </span>
        </h1>
        <img
          className="absolute right-[20%] top-[20%] bg-rose-500"
          src={"/languages.png"}
          alt="code"
          width={150}
          height={150}
        />
        <div className="h-15 absolute bottom-10 right-0 flex w-[60%] justify-around font-montserrat font-bold text-black">
          <Button content={"Try it!"} className={""} />
          <Button content={"Get Started"} className={"!bg-rose-500"} />
        </div>
      </div>
    </header>
  );
}
