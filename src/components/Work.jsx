import SectionHeading from "./SectionHeading";
import Project from "./Project";
import ProjectInverted from "./ProjectInverted";
import { useState, useEffect } from "react";
import cs from "../assets/cs.jpeg";
import spp from "../assets/spp.jpeg";
import medi from "../assets/medi.jpeg";

const Work = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const projects = [
    {
      title: "Crime Detection in Surveillance Videos",
      github: "",
      external:
        "https://docs.google.com/presentation/d/1bfXCxSfuFbCcqo7is7GxovuHTJJJGjWd690NL7l3Mic/edit#slide=id.g2cf005e6ef9_0_71",
      image: cs,
      mainContent:
        "Developed an intelligent system to detect and localize anomalies in untrimmed surveillance videos using weak video-level labels for training. Leveraged transfer learning with DenseNet121 and Vision Transformers (ViT-16) to build a robust anomaly detection pipeline.",
      tools: ["Python", "PyTorch", "DenseNet121", "ViT", "UCF Crime Dataset"],
      invert: false,
    },
    {
      title: "Stock Price Prediction",
      github: "",
      external: "https://doi.org/10.1007/978-981-19-3571-8_4",
      image: spp,
      mainContent:
        "Built a sentiment-based stock price prediction model using custom CNNs and LSTMs for time-series data. Designed a Google and Twitter news scraper to create a sentiment dataset and published the findings in the Springer Journal.",
      tools: [
        "Python",
        "TensorFlow",
        "Custom CNN",
        "LSTM",
        "Google/Twitter API",
      ],
      invert: true,
    },
    {
      title: "MediLab - Medicine Store Locator",
      github: "",
      external: "",
      image: medi,
      mainContent:
        "Developed a web app to locate nearby medicine stores using Django for server-side logic, React for a responsive user interface, and PostgreSQL for efficient data management. Streamlined deployment with Docker and GitHub Actions, improving automation and reducing manual overhead.",
      tools: [
        "Django",
        "React",
        "PostgreSQL",
        "Tailwind CSS",
        "Docker",
        "GitHub Actions",
      ],
      invert: false,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col gap-10 items-start justify-start lg:items-start lg:justify-start lg:mx-[13%] lg:py-24 lg:px-0 p-8 mt-0 lg:mt-0 min-h-[100vh] font-poppins text-[#7A9BFF] lg:border-b border-dotted border-white/20">
      <div className="lg:ml-[25%]">
        <SectionHeading heading={"04. Some Things I've Built"} length={80} />
      </div>
      <div className="flex flex-col lg:gap-28 gap-12 w-full lg:items-center lg:justify-center">
        {projects.map((project) =>
          project.invert && isLargeScreen ? (
            <ProjectInverted key={project.title} project={project} />
          ) : (
            <Project key={project.title} project={project} />
          )
        )}
      </div>
    </div>
  );
};

export default Work;
