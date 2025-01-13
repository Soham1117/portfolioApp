import { FaFile, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import SectionHeading from "./SectionHeading";
import element from "../assets/element.png";

const FooterX = () => {
  return (
    <div
      className="flex flex-col gap-16 lg:gap-0 lg:flex-row items-start justify-start lg:items-start lg:justify-start lg:mx-[13%] lg:py-24 
      lg:px-0 p-8 mt-12 lg:mt-0 min-h-[60vh] text-wrap font-poppins text-[#7A9BFF] lg:border-b border-dotted border-white/20"
    >
      <div className="flex flex-col gap-16 items-start justify-start w-full">
        <SectionHeading heading={"Find Me Here"} />
        <div className="flex relative lg:flex-row flex-col gap-12 lg:gap-0 items-start justify-between w-full lg:ml-0">
          <div className="lg:absolute flex flex-row gap-10 items-center lg:left-[0%] lg:top-[20%] z-10">
            <div className="flex lg:flex-col flex-row gap-8">
              <div className="flex flex-row gap-10 items-center">
                <div className="hidden lg:flex w-[1px] h-10 bg-white z-[30] "></div>
                <FaGithub
                  className="text-white text-2xl lg:text-4xl z-[30] hover:-translate-y-2 transition-all ease-in-out duration-200 cursor-pointer"
                  onClick={() => window.open("https://github.com/Soham1117")}
                />
              </div>
              <div className="flex flex-col gap-4 lg:ml-10">
                <span className="text-white/60">@Soham1117</span>
              </div>
            </div>
          </div>
          <div className="lg:absolute flex flex-row gap-10 items-center lg:left-[0%] lg:-bottom-60 z-10">
            <div className="flex lg:flex-col flex-row gap-8">
              <div className="flex flex-row gap-10 items-center">
                <div className="hidden lg:flex w-[1px] h-10 bg-white z-[30] "></div>
                <a href="mailto:sohampatel1117@gmail">
                  <IoMdMail className="text-white text-2xl lg:text-4xl z-[30] hover:-translate-y-2 transition-all ease-in-out duration-200 cursor-pointer" />
                </a>
              </div>
              <div className="flex flex-col gap-4 lg:ml-10">
                <span className="text-white/60">sohampatel1117@gmail</span>
              </div>
            </div>
          </div>
          <div className="lg:absolute flex flex-row gap-10 items-center lg:left-[50%] lg:top-[20%] z-10">
            <div className="flex lg:flex-col flex-row gap-8">
              <div className="flex flex-row gap-10 items-center">
                <div className="hidden lg:flex w-[1px] h-10 bg-white z-[30] cursor-pointer"></div>
                <FaLinkedinIn
                  className="text-white text-2xl lg:text-4xl z-[30] hover:-translate-y-2 transition-all ease-in-out duration-200 cursor-pointer"
                  onClick={() =>
                    window.open("https://linkedin.com/in/sohampatel1999")
                  }
                />
              </div>
              <div className="flex flex-col gap-4 lg:ml-10">
                <span className="text-white/60">@sohampatel1999</span>
              </div>
            </div>
          </div>
          <div className="lg:absolute flex flex-row gap-10 items-center lg:left-[50%] lg:-bottom-60 z-10">
            <div className="flex lg:flex-col flex-row gap-8">
              <div className="flex flex-row gap-10 items-center">
                <div className="hidden lg:flex w-[1px] h-10 bg-white z-[30] cursor-pointer"></div>
                <FaFile
                  className="text-white text-2xl lg:text-4xl z-[30] hover:-translate-y-2 transition-all ease-in-out duration-200 cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1ffBg1SjgwGF-kDYI5kb-IKuUy5EJjct1/view?usp=sharing"
                    )
                  }
                />
              </div>
              <div className="flex flex-col gap-4 lg:ml-10">
                <span className="text-white/60">My CV</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex w-full items-center justify-center">
        <img src={element} className="w-2/3" />
      </div>
    </div>
  );
};

export default FooterX;
