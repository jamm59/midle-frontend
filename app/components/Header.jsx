import Button from "./Button";
import Link from "next/link";
export default function Header() {
  return (
    <header className="grid h-screen w-full place-items-center">
      <div
        className="sm:text relative flex h-fit min-h-[80%] w-[70%] flex-col justify-center rounded-sm 
      bg-[#F4F9F9] px-5 drop-shadow-2xl sm:grid sm:h-full sm:w-full sm:place-content-center sm:gap-5"
      >
        <div className="absolute left-10 top-10 font-openSans text-[30px] font-black text-black">
          <Link
            href={"/"}
            className="cursor-pointer bg-gradient-to-r from-black to-rose-800 bg-clip-text text-transparent
    "
          >
            midle
          </Link>
        </div>
        <h1 className="h-fit min-h-[60%] w-[55%] text-left text-5xl sm:w-full sm:text-4xl">
          <span className="bg-black bg-clip-text font-moirai text-transparent">
            Code in any Spoken Language without worrying. Let us do the work for
            you.
          </span>
        </h1>
        <img
          className="transiton-all absolute right-[20%] top-[20%] cursor-pointer rounded-xl bg-rose-500
           drop-shadow-lg duration-200 hover:top-[19%] sm:static sm:m-auto sm:my-5"
          src={"/languages.png"}
          alt="code"
          width={150}
          height={150}
        />
        <div
          className="h-15 absolute bottom-10 right-0 flex w-[60%] justify-around
         font-montserrat text-black sm:static sm:w-full"
        >
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
