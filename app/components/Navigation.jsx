"use client";

import { useRef } from "react";

export const MenuItem = ({ children }) => {
  return (
    <div className="mb-3 hidden w-[40%] rounded-md bg-gray-900 p-3 text-white shadow-md transition-all duration-200 hover:translate-x-2 hover:shadow-lg sm:w-[60%]">
      {children}
    </div>
  );
};

export default function Navigation({ children }) {
  const navRef = useRef(null);

  const toggleCSSclasses = (el, cls) =>
    cls.forEach((cl) => el.classList.toggle(cl));

  const toggleChildrenclasses = (el, cl) => {
    el.querySelectorAll("div").forEach((child) => {
      child.classList && child.classList.toggle(cl);
    });
  };
  const handleNavClick = (e) => {
    // if (e.target === navRef) {
    //   console.log("something");
    // }
    const classNames = ["w-[40%]", "h-[95%]", "md:w-[90%]"];
    navRef.current ? toggleCSSclasses(navRef.current, classNames) : undefined;
    navRef.current
      ? toggleChildrenclasses(navRef.current, "hidden")
      : undefined;
  };
  return (
    <nav
      ref={navRef}
      onClick={handleNavClick}
      className="fixed bottom-5 right-5 z-50 flex flex-col items-start justify-start rounded-md
         bg-white px-5 py-2 font-lilita text-black shadow-lg 
         transition-all duration-500 ease-in-out"
    >
      {children}
      <img src="/menu-bar.png" className="mt-auto h-5 w-5" />
    </nav>
  );
}
