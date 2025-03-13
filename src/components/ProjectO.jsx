/* eslint-disable react/prop-types */
import { FiFolder } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
const ProjectO = ({ project }) => {
  return (
    <div
      className="flex flex-col gap-6 items-start justify-start p-5 font-poppins 
      text-indigo-300 w-full h-full bg-indigo-950 border-10 rounded-md 
        shadow-xl transition-all duration-500 ease-in-out  hover:-translate-y-2"
    >
      <div className="flex flex-row items justify-between w-full ">
        <div>
          <FiFolder size={30} />
        </div>
        <div>
          <a
            className="hover:text-indigo-400 hover:-translate-y-2 hover:transition-all duration-500 ease-in-out"
            href={project.external}
          >
            <FiExternalLink size={30} />
          </a>
        </div>
      </div>
      <div className="flex items-start justify-start text-left text-lg">
        <span>{project.title}</span>
      </div>
      <div className="flex items-start justify-start text-left text-sm text-indigo-500">
        <span>{project.mainContent}</span>
      </div>
      <ul className="flex flex-row flex-wrap gap-4 font-spacemono text-[12px] w-full text-indigo-500">
        {project.tools.map((tool, index) => (
          <li key={index}>{tool}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectO;
