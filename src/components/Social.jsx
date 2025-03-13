import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

const Social = () => {
  return (
    <div>
      <div className="hidden lg:flex flex-col gap-12 text-[#ffffff] items-center justify-center fixed bottom-0 left-[5.5%]">
        <a
          className="hover:text-[#A1C4FD] hover:-translate-y-2 hover:transition-all duration-700 ease-in-out"
          href="https://github.com/soham1117"
          target="_blank"
          rel="noreferrer"
        >
          <FiGithub size={25} />
        </a>
        <a
          className="hover:text-[#A1C4FD] hover:-translate-y-2 hover:transition-all duration-700 ease-in-out"
          href="https://www.linkedin.com/in/sohampatel1999/"
          target="_blank"
          rel="noreferrer"
        >
          <FiLinkedin size={25} />
        </a>
        <a
          className="hover:text-[#A1C4FD] hover:-translate-y-2 hover:transition-all duration-700 ease-in-out"
          target="_blank"
          href="https://www.instagram.com/soham__404/"
          rel="noreferrer"
        >
          <FiInstagram size={25} />
        </a>

        <div className=" bg-indigo-200 w-[0.5px] h-36"></div>
      </div>
    </div>
  );
};

export default Social;
