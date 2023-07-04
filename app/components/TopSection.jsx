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
            What is Midle?
          </h3>
          <p className="mb-10 w-[90%] text-left font-montserrat sm:text-center sm:font-openSans sm:text-white">
            Midle is a powerful tool designed for developers who prefer coding
            in their native language rather than English. It acknowledges that
            most programming languages are built with English-based syntax and
            keywords. With Midle, you don't have to learn English to code
            effectively. You can comfortably write code in your preferred
            language, and behind the scenes, Midle will seamlessly transpile it
            into English. The result is an English code file that can be easily
            linked to compilers or interpreters, eliminating unnecessary stress
            and language barriers.
          </p>
          <h3 className="font-lilita text-[2rem] font-bold text-white">
            Code in any language of your choice!
          </h3>
          <p className="w-[90%] text-left font-montserrat sm:text-center sm:font-openSans sm:text-white">
            With Midle, you have the freedom to code in any language you're
            comfortable with. Whether it's Java, Python, C++, or any other
            programming language, Midle acts as a reliable intermediary that
            allows you to express your code using your native language. Say
            goodbye to the limitations imposed by language restrictions and
            embrace the flexibility of coding in a language that resonates with
            you.
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
            It's just similation!
          </h3>
          <p className="mb-10 w-[90%] text-left font-montserrat sm:text-center sm:font-openSans sm:text-white">
            Midle operates as a simulation platform, offering a seamless
            experience for developers. It emulates the process of translating
            non-English code into English, facilitating smooth execution in the
            background. While Midle replicates the behavior of a compiler or
            interpreter, it's important to note that it does not perform the
            actual compilation process. Instead, it creates a simulation
            environment where you can witness the transpilation of your code and
            its transformation into English.
          </p>
          <h3 className="font-lilita text-[2rem] font-bold text-white">
            It's not a compiler!
          </h3>
          <p className="w-[90%] text-left font-montserrat sm:text-center sm:font-openSans sm:text-white">
            It's essential to understand that Midle is not a compiler itself.
            Rather, it serves as an intermediary tool that aids in translating
            code from various languages into English. While compilers are
            responsible for converting source code into executable files, Midle
            focuses on facilitating the translation of code syntax and ensuring
            it adheres to English conventions. This enables easier integration
            with compilers or interpreters down the line, minimizing any
            potential obstacles caused by language differences.
          </p>
        </div>
      </div>
    </section>
  );
}
