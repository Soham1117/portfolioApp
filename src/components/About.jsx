import SectionHeading from "./SectionHeading";
import UnderlinedText from "./UnderlinedText";
import self from "../assets/self.jpg";
import { useEffect, useState, useRef } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(componentRef.current); // Cleanup observer
      }
    };
  }, []);

  return (
    <div
      ref={componentRef} // Attach the reference
      className={`flex flex-col z-[10] gap-10 items-start pt-12 lg:pt-36 justify-end lg:items-start 
      lg:mx-[13%] lg:px-0 px-8 lg:justify-start min-h-[80vh] transition-all duration-1000 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      }`}
    >
      <div className="flex lg:flex-row flex-col justify-start lg:items-center items-center lg:gap-0 gap-12 z-[30]">
        <div className="flex flex-col items-start gap-10 w-full lg:w-[50%]">
          <SectionHeading heading={"02. About Me"} length={52} />
          <div className="flex flex-col gap-3">
            <p className="text-[#D1D5DB] text-wrap font-poppins text-sm sm:text-base lg:text-md mt-4">
              Hello! I’m Soham Patel, a software engineer passionate about
              designing and building innovative software solutions. My journey
              began in India, where I developed a strong foundation in
              programming through diverse academic projects. After graduation, I
              worked at the research and development division of{" "}
              <UnderlinedText url="https://www.larsentoubro.com/">
                {" "}
                Larsen & Toubro Limited
              </UnderlinedText>
              , contributing to real-time system development.
            </p>
            <p className="text-[#D1D5DB] font-poppins text-sm sm:text-base lg:text-md mt-4">
              Currently, I’m in the final semester of my master’s in Computer
              Science in the U.S., specializing in backend development, machine
              learning, and cloud computing. With experience in creating web and
              desktop applications, APIs, and data-driven models, I’m driven to
              build impactful and scalable digital solutions.
            </p>
            <p className="text-[#D1D5DB] font-poppins text-sm sm:text-base lg:text-md mt-4">
              I also recently got certified as an{" "}
              <UnderlinedText url="https://www.credly.com/badges/d4d4f75b-4cb0-4a20-9894-81c708702ac6/public_url">
                AWS Developer Associate
              </UnderlinedText>
              .
            </p>
            <p className="text-[#D1D5DB] font-poppins text-sm sm:text-base lg:text-md mt-4">
              Here are a few technologies I’ve been working with recently:
              <ul className="grid grid-cols-2 mt-4 w-2/3">
                <li>
                  <div className="flex flex-row gap-2">
                    <span> ▹ </span>
                    <span> React </span>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-2">
                    <span> ▹ </span>
                    <span> AWS </span>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-2">
                    <span> ▹ </span>
                    <span> LLMs </span>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-2">
                    <span> ▹ </span>
                    <span> Tailwind </span>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-2">
                    <span> ▹ </span>
                    <span> Docker </span>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-2">
                    <span> ▹ </span>
                    <span> Kubernetes </span>
                  </div>
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="flex items-start lg:items-center lg:justify-center lg:w-[50%] lg:mt-0 mt-16">
          <div className="block relative group ">
            <div className="z-10 flex absolute top-[-10%] left-[-10%] items-center justify-center bg-[rgba(223,154,255,0.05)] rounded-[16px] w-[120%] h-[120%]">
              <div className="relative top-0 left-0 w-[100%] h-[100%] overflow-hidden  bg-indigo-600/20 rounded-full filter blur-3xl mix-blend-overlay"></div>
            </div>
            <div className="z-20 relative bg-slate lg:w-80 lg:h-1/2 w-72  group-hover:scale-105 transition-all duration-300 ease-in-out ">
              <img
                src={self}
                alt="Example"
                className="w-full h-full rounded-[16px] border-t border-indigo-600"
              />
            </div>
            {/* <div className="lg:hidden w-72 h-72 border-2 rounded-[4px] border-indigo-300 relative top-4 left-4  group-hover:translate-y-2 group-hover:translate-x-2 transition-all duration-300 ease-in-out"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
