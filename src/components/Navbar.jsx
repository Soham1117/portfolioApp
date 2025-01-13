import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import NavLinks from "./NavLinks.jsx";
import NavLinksVertical from "./NavLinksVertical.jsx";
import logo from "../assets/Layer 1.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTop, setIsTop] = useState(true);

  function toggle() {
    setOpen(!open);
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= lastScrollY || currentScrollY <= 50);
      setLastScrollY(currentScrollY);
      setIsTop(currentScrollY === 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`w-full text-[#EEEEEE] p-4 px-8 text-md font-spacemono transition-all duration-300 ease-out border-b border-dotted border-white/20 ${
          !isTop
            ? "bg-midnight-blue shadow-lg backdrop-blur-3xl bg-opacity-20"
            : "bg-transparent"
        } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="flex justify-between items-center w-full">
          <div className="flex">
            <img
              src={logo}
              alt="Soham"
              className="w-16 h-16 hover:drop-shadow-[2px_2px_0px_rgb(129,40,217)] hover:translate-y-[-3px] hover:translate-x-[-3px] 
                      transition-transform duration-200 hover:border-indigo-400"
            />
          </div>
          <div className="hidden md:flex">
            <NavLinks />
          </div>
          <div
            className={`fixed md:hidden inset-0 bg-indigo-900 transform ${
              open ? "opacity-100" : "opacity-0 pointer-events-none"
            } transition-all duration-300 ease-in-out z-[30]`}
          >
            <div className="sticky top-0 flex justify-between items-center p-4 px-8 bg-opacity-40 backdrop-blur-lg bg-indigo-950 z-[40]">
              <img
                src={logo}
                alt="Soham"
                className="w-16 h-16 hover:drop-shadow-[2px_2px_0px_rgb(129,40,217)] hover:translate-y-[-3px] hover:translate-x-[-3px] 
                        transition-transform duration-200 hover:border-indigo-400"
              />
              <button onClick={toggle} className="text-[#EEEEEE]">
                <X />
              </button>
            </div>
            <NavLinksVertical onClose={toggle} />
          </div>
          <button onClick={toggle} className="flex md:hidden text-[#EEEEEE]">
            <Menu />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
