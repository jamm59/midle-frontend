export default function Button({ content, clickEvent, FontIcon, className }) {
  return (
    <>
      <button
        onClick={clickEvent}
        className={`m-2 grid w-[50%] place-items-center rounded-md
                  bg-white px-3 py-3 text-left
                  font-openSans text-sm text-black shadow-2xl transition-colors
                  ease-in md:text-lg ${className}`}
      >
        {FontIcon}
        {content}
      </button>
    </>
  );
}
