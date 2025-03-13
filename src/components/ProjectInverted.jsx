/* eslint-disable react/prop-types */
// import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";

const ProjectInverted = ({ project }) => {
  return (
    <div className="flex flex-col gap-3 z-30 bg-gradient-radial from-midnight-pink to-black lg:flex-row relative lg:w-full w-[95%] h-max items-center justify-center p-2 rounded-[16px] shadow-indigo-700 lg:shadow-lg border border-indigo-600/40 hover:shadow-midnight-pink hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-in-out">
      <div className="flex flex-col justify-center relative bg-inherit top-0 z-[30] left-0 max-lg:shadow-2xl items-start lg:items-end text-left lg:text-right w-full lg:w-1/2 h-full rounded-xl lg:ml-10">
        <div className="flex flex-col gap-6 items-start w-full">
          <div className="flex flex-col items-start w-full">
            <span className="font-spacemono text-md text-indigo-500 ">
              Featured Project
            </span>
            <span className="text-3xl text-[#D1D5DB] font-semibold">
              {project.title}
            </span>
          </div>
          <div className="flex flex-col relative items-start bg-indigo-950 shadow-2xl rounded-sm w-[130%] h-18">
            <p className="text-sm p-6 text-left text-[#D1D5DB]">
              {project.mainContent}
            </p>
          </div>
          <div className="flex flex-col gap-6 justify-start">
            <ul className="flex flex-row gap-4 items-center font-spacemono text-[12px] w-max text-indigo-500">
              {project.tools.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
            <div className="flex flex-row gap-3 items-start justify-start">
              <ul className="flex flex-row gap-4 items-center font-spacemono text-[12px] text-white w-max">
                {project.external && (
                  <li>
                    <a
                      className="hover:text-indigo-400 hover:-translate-y-2 hover:transition-all duration-500 ease-in-out"
                      href={project.external}
                    >
                      <FiExternalLink size={25} />
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:justify-center lg:items-center relative group lg:w-1/2 lg:my-10 lg:mx-10">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full rounded-[16px] z-20"
        />
        <div className="absolute top-0 left-[0%] w-full h-full rounded-[16px] group-hover:bg-opacity-0 transition-all duration-300 ease-in-out bg-indigo-200 bg-opacity-80 pointer-events-none mix-blend-color"></div>
        <div className="lg:flex hidden absolute top-[-10%] left-[-10%] w-[110%] h-[110%] rounded-[16px] bg-indigo-700/20 overflow-hidden z-[1] filter blur-3xl"></div>
      </div>
    </div>
  );
};

export default ProjectInverted;
