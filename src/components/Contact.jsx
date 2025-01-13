import SectionHeading from "./SectionHeading";
import { useEffect, useState } from "react";

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className="flex flex-col gap-10 items-start justify-start lg:items-start lg:justify-center lg:mx-[13%] lg:py-24 
    lg:px-0 p-8 mt-40 lg:mt-0 min-h-[50vh] font-poppins text-[#7A9BFF] lg:border-b border-dotted border-white/20"
    >
      <div className="lg:mx-[25%]">
        <SectionHeading heading={"05. What's Next?"} length={52} />
      </div>
      <div className="flex flex-col items-center gap-10 w-full lg:w-[50%] lg:mx-[25%]">
        <div className="flex flex-col gap-3">
          <p className=" text-center text-[#D1D5DB] font-poppins text-sm sm:text-base lg:text-lg mt-8">
            I’m currently exploring new opportunities and would love to connect!
            If you have a role or project in mind, or just want to chat, my
            inbox is always open. I&apos;ll do my best to respond promptly and
            look forward to hearing from you.
          </p>
        </div>
        <button
          className={`border-2 border-indigo-300 text-indigo-200 font-spacemono rounded-md p-2 pl-3 pr-3  
                    hover:shadow-[4px_4px_0px_rgb(129,40,217)] hover:translate-y-[-3px] hover:translate-x-[-3px] 
                    hover:border-[rgbrgb(129,40,217)] transition-all duration-400 ease-in-out ${
                      isLoaded
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-5 opacity-0"
                    } `}
        >
          <a
            href="mailto:sohampatel1117@gmailcom"
            className="w-full h-full flex justify-center items-center"
          >
            Say Hello!
          </a>
        </button>
      </div>
    </div>
  );
};

export default Contact;
