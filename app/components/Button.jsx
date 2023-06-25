import { twMerge } from "tailwind-merge";
export default function Button({ content, clickEvent, FontIcon, className }) {
  className = twMerge(
    `m-2 w-[50%] min-w-fit flex justify-around items-center rounded-md
  bg-white px-3 py-3 text-left font-openSans text-sm
  text-black shadow-xl transition-all duration-200 ease-in
  hover:shadow-2xl md:text-lg`,
    className
  );
  return (
    <>
      <button onClick={clickEvent} className={className}>
        {content}
        {FontIcon}
      </button>
    </>
  );
}
