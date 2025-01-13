import UnderlinedText from "./UnderlinedText";
import { useState, useEffect } from "react";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center min-h-[80vh] p-5 z-[10] mt-24">
      <div className="flex flex-col items-center justify-center z-[10]">
        <div className="flex flex-col gap-12 justify-center items-center z-[10]">
          <span
            className={`text-[#D1D5DB] text-lg lg:text-xl font-poppins transition-all duration-100 ease-in-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            Hi, I&apos;m
          </span>
          <div className="flex flex-col justify-center items-center gap-3">
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-r from-[#A1C4FD] via-[#6087ff] to-[#cccccc] font-custom text-6xl lg:text-[9rem] font-bold transition-all duration-300 ease-in-out animate-gradient ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              Soham Patel
            </span>

            <span
              className={`text-[#7A9BFF] font-custom text-center text-3xl lg:text-7xl font-bold transition-all duration-500 ease-in-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              A Passionate Software Developer
            </span>
          </div>
          <p
            className={`text-[#D1D5DB] font-poppins text-lg  lg:text-lg w-full lg:w-[55%] text-center transition-all duration-700 ease-in-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            I’m a software engineer passionate about crafting efficient and
            innovative solutions that blend cutting-edge technology with
            seamless user experiences. Currently, I’m completing my masters in
            Computer Science at &nbsp;
            <UnderlinedText url={"https://www.ncsu.edu/"}>
              {" "}
              North Carolina State University.
            </UnderlinedText>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
