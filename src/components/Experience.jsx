import { FaGitlab, FaPython, FaReact } from "react-icons/fa6";
import SectionHeading from "./SectionHeading";
import { useState } from "react";
import {
  SiConfluence,
  SiCplusplus,
  SiDjango,
  SiJira,
  SiOpencv,
  SiPytorch,
  SiQt,
  SiTensorflow,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { BsNvidia } from "react-icons/bs";

const Experience = () => {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [fifth, setFifth] = useState(false);
  function handleClick1() {
    console.log(`${first} ${second} ${third} ${fourth} ${fifth}`);
    setFirst(true);
    setSecond(false);
    setThird(false);
    setFourth(false);
    setFifth(false);
  }
  function handleClick2() {
    setSecond(true);
    setFirst(false);
    setThird(false);
    setFourth(false);
    setFifth(false);
  }
  function handleClick3() {
    setThird(true);
    setFirst(false);
    setFourth(false);
    setFifth(false);
    setSecond(false);
  }

  return (
    <div className="z-50 flex flex-col lg:gap-0 gap-10 items-start justify-start lg:items-start lg:justify-center lg:mx-[13%] lg:py-48 lg:px-0 p-8  min-h-[100vh] mt-40 font-poppins">
      <div className="lg:ml-[25%] z-[30]">
        <SectionHeading
          heading={"03. Where I’ve Worked"}
          length={64}
          className=""
        />
      </div>
      <div className="flex z-[30] flex-col justify-start lg:flex-row items-start lg:justify-start w-[100%] overflow-hidden">
        <div
          className={`relative w-[160px] hidden lg:flex h-[2px] top-[48px] lg:top-0 lg:w-[2px] lg:h-[48px] lg:mt-16 bg-indigo-200 z-50 transition-all duration-300 ease-in-out ${
            first
              ? "h-[0px]  lg:top-0"
              : second
              ? "h-[0px] lg:top-[48px]"
              : third
              ? "h-[0px] lg:top-[96px]"
              : fourth
              ? "h-[0px] lg:top-[144px]"
              : fifth
              ? "h-[0px] lg:top-[192px]"
              : "h-[0px] lg:top-0"
          }`}
        ></div>
        <div className="flex items-start justify-start lg:flex-col lg:w-[calc(25%-2px)] lg:mt-16">
          <ul className="flex flex-row overflow-x-auto over w-screen lg:w-full lg:overflow-hidden lg:space-x-0 lg:flex-col text-[#FFFFFF] scrollbar-hide lg:text-wrap">
            <li
              className={`pl-6 pr-6 pt-3 pb-3 lg:p-3 lg:w-full w-[160px] flex-shrink-0 transition-all delay-100 ease-in cursor-pointer ${
                first
                  ? "border-b-4 border-indigo-300 lg:border-none bg-indigo-700 "
                  : "hover:bg-indigo-900"
              }`}
              onClick={handleClick1}
            >
              DRC Systems
            </li>
            <li
              className={`pl-6 pr-6 pt-3 pb-3 lg:p-3 lg:w-full w-[160px] flex-shrink-0 transition-all delay-100 ease-in cursor-pointer ${
                second
                  ? "bg-indigo-900 border-b-4 lg:border-none border-indigo-300"
                  : " hover:bg-indigo-900"
              }`}
              onClick={handleClick2}
            >
              SE - Larsen Toubro Limited
            </li>
            <li
              className={`pl-6 pr-6 pt-3 pb-3 lg:p-3 lg:w-full w-[160px] flex-shrink-0 transition-all delay-100 ease-in cursor-pointer ${
                third
                  ? "border-b-4 border-indigo-300 lg:border-none bg-indigo-700 "
                  : "hover:bg-indigo-900"
              }`}
              onClick={handleClick3}
            >
              GET - Larsen Toubro Limited
            </li>
          </ul>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-start mt-8 w-full lg:mt-16 lg:w-[75%]">
          <div className="flex flex-col items-start justify-start lg:w-2/3 lg:px-8">
            <div
              className={`${
                first ? "flex" : "hidden"
              } flex-col text-[#D1D5DB] lg:h-[500px] font-poppins overflow-y-auto`}
            >
              <span>
                <span className="text-[#D1D5DB] text-xl font-medium">
                  Software Development Engineer Intern
                </span>{" "}
                <span
                  className="text-[#7A9BFF] text-xl cursor-pointer"
                  onClick={() =>
                    window.open("https://drcsystems.com", "_blank")
                  }
                >
                  {" "}
                  @ DRC Systems
                </span>
              </span>
              <span className="text-indigo-600 font-spacemono">
                May 2024 - Jun 2024{" "}
              </span>
              <ul className="text-[#D1D5DB] mt-5 flex flex-col gap-2 text-sm">
                <li className="flex items-start before:content-['▹'] before:text-indigo-200 before:mr-5">
                  Contributed to the development of a financial dashboard using
                  React, Django, and AWS RDS, ensuring smooth integration of the
                  frontend and backend through REST APIs.{" "}
                </li>{" "}
                <li className="flex items-start before:content-['▹'] before:mr-5 before:text-indigo-200">
                  Optimized the dashboard&apos;s performance by designing
                  scalable architectures with AWS S3 and CloudFront, reducing
                  latency by 40% compared to the previous on-premise storage
                  setup.
                </li>
                <li className="flex items-start before:content-['▹'] before:mr-5 before:text-indigo-200">
                  {" "}
                  Collaborated with cross-functional teams to enhance the
                  dashboard&apos;s functionality, focusing on efficient data
                  processing, seamless user experience, and real-time updates.
                </li>{" "}
              </ul>
              <div className="w-full overflow-hidden text-white text-4xl mt-12 bg-midnight-blue p-4 rounded-xl bg-opacity-80 backdrop-blur-3xl shadow-2xl">
                <div className="flex  space-x-8 justify-center">
                  <FaReact />
                  <SiDjango />
                  <RiTailwindCssFill />

                  <div>
                    <img
                      src="src/assets/rds.png"
                      alt="aws"
                      className="w-8 h-8"
                    />
                  </div>

                  <div>
                    <img
                      src="src/assets/s3.png"
                      alt="aws"
                      className="w-8 h-8"
                    />
                  </div>
                  <div>
                    <img
                      src="src/assets/cf.png"
                      alt="aws"
                      className="w-8 h-8"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${
                second ? "flex" : "hidden"
              } flex-col text-[#D1D5DB] lg:h-[500px] font-poppins `}
            >
              <span>
                <span className="text-[#D1D5DB] text-xl font-medium">
                  Senior Engineer
                </span>{" "}
                <span
                  className="text-[#7A9BFF] text-xl cursor-pointer"
                  onClick={() =>
                    window.open("https://www.larsentoubro.com/", "_blank")
                  }
                >
                  {" "}
                  @ Larsen & Toubro Limited
                </span>
              </span>
              <span className="text-indigo-600 font-spacemono">
                Aug 2022 - July 2023{" "}
              </span>
              <ul className="text-[#D1D5DB] mt-5 flex flex-col gap-2 text-sm">
                <li className="flex items-start before:content-['▹'] before:text-indigo-200 before:mr-5">
                  Spearheaded the development of the Combat Management System by
                  designing the user interface and optimizing server-side logic
                  with C++, Qt, and QML, achieving a 5x reduction in data
                  processing time (from 100ms to 20ms), surpassing the industry
                  benchmark of 50ms.
                </li>{" "}
                <li className="flex items-start before:content-['▹'] before:mr-5 before:text-indigo-200">
                  Engineered a custom object tracking model for the Helo-Landing
                  System on Nvidia Xavier, utilizing Yolov7, CUDA, DeepStream,
                  and Python to achieve real-time deployment with TensorRT
                  optimization, reducing inference time by 30%.
                </li>
                <li className="flex items-start before:content-['▹'] before:mr-5 before:text-indigo-200">
                  {" "}
                  Collaborated with cross-functional teams to implement
                  real-time sensor data processing algorithms, ensuring high
                  accuracy and performance for mission-critical applications.
                </li>{" "}
              </ul>
              <div className="w-full overflow-hidden text-white text-4xl mt-12 bg-midnight-blue p-4 rounded-xl bg-opacity-80 backdrop-blur-3xl shadow-2xl">
                <div className="flex  space-x-8 justify-center">
                  <BiLogoCPlusPlus />
                  <SiQt />
                  <FaPython />
                  <BsNvidia />
                  <SiTensorflow />
                  <SiPytorch />
                </div>
              </div>
            </div>
            <div
              className={`${
                third ? "flex" : "hidden"
              } flex-col lg:h-[500px] text-[#D1D5DB] font-poppins `}
            >
              <span>
                <span className="text-[#D1D5DB] text-xl font-medium">
                  Graduate Engineer Trainee
                </span>{" "}
                <span
                  className="text-[#7A9BFF] text-xl cursor-pointer"
                  onClick={() =>
                    window.open("https://www.larsentoubro.com/", "_blank")
                  }
                >
                  {" "}
                  @ Larsen & Toubro Limited
                </span>
              </span>
              <span className="text-indigo-600 font-spacemono">
                Aug 2021 - Aug 2022{" "}
              </span>
              <ul className="text-[#D1D5DB] mt-5 flex flex-col gap-2 text-sm">
                <li className="flex items-start before:content-['▹'] before:text-indigo-200 before:mr-5">
                  Conducted analysis on data from the NIR camera for
                  surveillance, updating the bore sighting algorithm and
                  improving zoom functionality by 50%, reducing focus lag from 2
                  seconds to 1 second using Visual C++ and OpenCV.
                </li>{" "}
                <li className="flex items-start before:content-['▹'] before:mr-5 before:text-indigo-200">
                  Provisioned GitLab for version control and CI/CD pipelines,
                  integrating automated testing to streamline development
                  processes, enhance code quality, and improve efficiency for
                  sensitive projects.
                </li>
                <li className="flex items-start before:content-['▹'] before:mr-5 before:text-indigo-200">
                  Modernized legacy system documentation and support, ensuring
                  compliance with security protocols, while leveraging JIRA and
                  Confluence to enhance documentation practices and project
                  management oversight.
                </li>
              </ul>
              <div className="w-full overflow-hidden text-white text-4xl mt-12 bg-midnight-blue p-4 rounded-xl bg-opacity-80 backdrop-blur-3xl shadow-2xl">
                <div className="flex space-x-8 justify-center">
                  <SiOpencv />
                  <SiCplusplus />
                  <FaGitlab />
                  <SiJira />
                  <SiConfluence />
                </div>
              </div>
            </div>
            <div
              className={`${
                fourth ? "flex" : "hidden"
              } flex-col lg:h-[500px] text-[#D1D5DB] font-poppins `}
            >
              <span>
                <span className="text-[#D1D5DB] text-xl font-medium">
                  Software Engineer Co-op
                </span>{" "}
                <span className="text-[#7A9BFF] text-xl"> @ Starry</span>
              </span>
              <span className="text-indigo-600 font-spacemono">
                July - December 2016{" "}
              </span>
              <ul className="text-[#D1D5DB] mt-5 flex flex-col gap-2 text-sm">
                <li className="flex items-start before:content-['▹'] before:text-indigo-200 before:mr-5">
                  Engineered and improved major features of Starrys
                  customer-facing Android web app using ES6, Handlebars,
                  Backbone, Marionette, and CSS
                </li>{" "}
                <li className="flex items-start before:content-['▹'] before:mr-5 before:text-indigo-200">
                  Proposed and implemented scalable solutions to issues
                  identified with cloud services and applications responsible
                  for communicating with the Starry Station internet router
                </li>
                <li className="flex items-start before:content-['▹'] before:mr-5 before:text-indigo-200">
                  {" "}
                  Collaborated with designers and other developers to ensure
                  thoughtful and consistent user experiences across Starry’s iOS
                  and Android mobile apps
                </li>{" "}
              </ul>
            </div>
            <div
              className={`${
                fifth ? "flex" : "hidden"
              } flex-col lg:h-[500px] text-[#D1D5DB] font-poppins `}
            >
              <span>
                <span className="text-[#D1D5DB] text-xl font-medium">
                  Creative Technologist Co-op
                </span>{" "}
                <span className="text-[#7A9BFF] text-xl"> @ MullenLowe</span>
              </span>
              <span className="text-indigo-600 font-spacemono">
                July - December 2015{" "}
              </span>
              <ul className="text-[#D1D5DB] mt-5 flex flex-col gap-2 text-sm">
                <li className="flex items-start before:content-['▹'] before:text-indigo-200 before:mr-5">
                  Developed, maintained, and shipped production code for client
                  websites primarily using HTML, CSS, Sass, JavaScript, and
                  jQuery
                </li>{" "}
                <li className="flex items-start before:content-['▹'] before:mr-5 before:text-indigo-200">
                  Performed quality assurance tests on various sites to ensure
                  cross-browser compatibility and mobile responsiveness
                </li>
                <li className="flex items-start before:content-['▹'] before:mr-5 before:text-indigo-200">
                  {" "}
                  Clients included JetBlue, Lovesac, U.S. Cellular, U.S.
                  Department of Defense, and more
                </li>{" "}
              </ul>
            </div>
          </div>
          <div
            className={` ${
              first ? "flex" : "hidden"
            } items-center justify-center lg:items-center lg:justify-center lg:w-1/3 lg:mt-0 my-12`}
          >
            <div className="flex relative group items-center justify-center w-full h-full">
              <div className="z-10 flex absolute top-[-10%] lg:top-[-10%] left-[0%] items-center justify-center bg-[rgba(223,154,255,0.1)] rounded-[16px] lg:w-[100%] lg:h-[120%] w-[110%] h-[120%]"></div>
              <div className="z-20 lg:w-[90%] lg:h-[90%] w-72 h-72 group-hover:scale-105 transition-all duration-300 ease-in-out">
                <img
                  src="src/assets/drc.jpg"
                  alt="Example"
                  className="w-full h-full rounded-[16px] border-t object-top object-cover border-indigo-600"
                />
              </div>
            </div>
          </div>
          <div
            className={` ${
              second ? "flex" : "hidden"
            } items-center justify-center lg:items-center lg:justify-center lg:w-1/3 lg:mt-0 my-12`}
          >
            <div className="flex relative group items-center justify-center w-full h-full">
              <div className="z-10 flex absolute top-[-10%] lg:top-[-10%] left-[0%] items-center justify-center bg-[rgba(223,154,255,0.1)] rounded-[16px] lg:w-[100%] lg:h-[120%] w-[110%] h-[120%]"></div>
              <div className="z-20 lg:w-[90%] lg:h-[90%] w-72 h-72 group-hover:scale-105 transition-all duration-300 ease-in-out">
                <img
                  src="src/assets/lnt.jpg"
                  alt="Example"
                  className="w-full h-full rounded-[16px] border-t object-top object-cover border-indigo-600"
                />
              </div>
            </div>
          </div>
          <div
            className={` ${
              third ? "flex" : "hidden"
            } items-center justify-center lg:items-center lg:justify-center lg:w-1/3 lg:mt-0 my-12`}
          >
            <div className="flex relative group items-center justify-center w-full h-full">
              <div className="z-10 flex absolute top-[-10%] lg:top-[-10%] left-[0%] items-center justify-center bg-[rgba(223,154,255,0.1)] rounded-[16px] lg:w-[100%] lg:h-[120%] w-[110%] h-[120%]"></div>
              <div className="z-20 lg:w-[90%] lg:h-[90%] w-72 h-72 group-hover:scale-105 transition-all duration-300 ease-in-out">
                <img
                  src="src/assets/lnt.jpg"
                  alt="Example"
                  className="w-full h-full rounded-[16px] border-t object-top object-cover border-indigo-600"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
