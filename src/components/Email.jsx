import { useState, useEffect } from "react";

const Email = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <div
        className={`hidden lg:flex flex-col gap-12 text-white font-spacemono items-center fixed bottom-0 right-[5.5%] transition-all duration-300 ease-in-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        <h3 className="[writing-mode:vertical-lr] hover:text-[#A1C4FD] hover:-translate-y-2 hover:transition-all duration-700 ease-in-out">
          {" "}
          sohampatel1117@gmail.com
        </h3>
        <div className=" bg-indigo-200 w-[0.5px] h-36"></div>
      </div>
    </div>
  );
};

export default Email;
