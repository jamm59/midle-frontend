import Button from "./Button";
export default function Footer() {
  return (
    <footer className="mx-auto h-screen overflow-hidden bg-gray-900 font-montserrat">
      <section className="grid h-[70%] place-items-center sm:px-1">
        <h1 className="h-[60%] min-h-fit w-[70%] text-center font-lilita text-5xl font-extrabold tracking-wider sm:w-fit sm:text-3xl">
          <span className="bg-gradient-to-r from-rose-500 to-emerald-500 bg-clip-text text-transparent">
            Execute Non-English Code with Our Middleware Solution
          </span>
        </h1>
        <h1></h1>
        <p className="text-md font-monterrat h-[90%] w-[50%] scroll-py-24 rounded-md text-left text-white sm:w-fit sm:text-center">
          Our app serves as a powerful middleware solution, enabling effortless
          translation of non-English syntax into English, allowing you to
          execute your code seamlessly behind the scenes. Say goodbye to
          language barriers and focus on coding, as our app handles the
          translation process, ensuring your code runs smoothly and efficiently.
        </p>
        <div className="h-15 flex w-[30%] justify-around sm:w-full">
          <Button content={"Get Started"} />
          <Button content={"Learn More"} />
        </div>
      </section>
      <section className="grid h-[30%] place-items-center bg-white font-openSans text-gray-900">
        <div className="sm:textsm grid h-[90%] w-[93%] grid-cols-2 overflow-hidden rounded-lg shadow-2xl sm:grid sm:w-[98%] sm:grid-cols-1 sm:grid-rows-2">
          <span className="grid place-items-center">
            @{new Date().getFullYear()} All Rights Reserved
          </span>
          <div className="flex items-center justify-between px-16 font-bold text-gray-900 sm:px-6">
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
