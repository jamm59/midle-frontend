import Button from "./Button";
export default function Footer() {
  return (
    <footer className="h-screen bg-gray-900 font-montserrat">
      <section className="grid h-[70%] place-items-center sm:px-1">
        <h1 className="h-[60%] w-[50%] text-center font-lilita text-5xl font-extrabold tracking-wider sm:w-fit sm:text-4xl">
          <span className="bg-gradient-to-r from-rose-500 to-teal-500 bg-clip-text text-transparent">
            Understand Cover Flow. Increase your Angels
          </span>
        </h1>
        <h1></h1>
        <p className="text-md h-[90%] w-[50%] scroll-py-24 rounded-md text-center font-montserrat text-white sm:w-fit">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
          doloribus autem alias eligendi ea laborum ratione molestiae
          consectetur, delectus, iure amet suscipit esse debitis nisi distinctio
          est atque odio quas!
        </p>
        <div className="h-15 flex w-[30%] justify-around font-bold sm:w-full">
          <Button content={"Get Started"} />
          <Button content={"Learn More"} />
        </div>
      </section>
      <section className="grid h-[30%] place-items-center bg-white font-openSans text-gray-900">
        <div className="sm:textsm grid h-[90%] w-[93%] grid-cols-2 overflow-hidden rounded-lg shadow-2xl sm:grid sm:w-[98%] sm:grid-cols-1 sm:grid-rows-2">
          <span className="grid place-items-center">
            @{new Date().getFullYear()} All Rights Reserved
          </span>
          <div className="flex items-center justify-between px-6 font-bold text-gray-900 [&>*:nth-child(even)]:text-teal-600">
            <a href="">About</a>
            <a href="">Github</a>
            <a href="">Portfolio</a>
            <a href="">Contact</a>
          </div>
        </div>
      </section>
    </footer>
  );
}
