import Button from "./Button";
export default function Footer() {
  return (
    <footer className="h-screen bg-gray-900 font-montserrat">
      <section className="grid h-[70%] place-items-center">
        <h1 className="h-[60%] w-[50%] text-center font-lilita text-5xl font-extrabold tracking-wider">
          <span className="bg-gradient-to-r from-rose-500 to-teal-500 bg-clip-text text-transparent">
            Understand Cover Flow. Increase your Angels
          </span>
        </h1>
        <h1></h1>
        <p className="text-md h-[90%] w-[500px] scroll-py-24 rounded-md text-center font-montserrat">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
          doloribus autem alias eligendi ea laborum ratione molestiae
          consectetur, delectus, iure amet suscipit esse debitis nisi distinctio
          est atque odio quas!
        </p>
        <div className="h-15 flex w-[30%] justify-around font-bold">
          <Button content={"Get Started"} />
          <Button content={"Learn More"} />
        </div>
      </section>
      <section className="grid h-[30%] place-items-center bg-white font-openSans text-gray-900">
        <div className="flex h-[90%] w-[90%] items-center justify-around rounded-lg shadow-2xl">
          <span>
            <strong>@{new Date().getFullYear()}</strong> All Rights Reserved{" "}
          </span>
          <div className="flex w-[40%] items-center justify-between font-bold text-gray-900">
            <a href="">About</a>
            <a href="">Github</a>
            <a href="">Portfolio</a>
            <a href="">Contact</a>
            <a href="">Translation</a>
          </div>
        </div>
      </section>
    </footer>
  );
}
