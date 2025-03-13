import ProjectO from "./ProjectO";
import SectionHeading from "./SectionHeading";
import { useState, useEffect, useRef } from "react";

const OtherProjects = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  const projects = [
    {
      title: "Dynamic Healing",
      github: "",
      external: "https://dynamichealing.netlify.app/",
      mainContent:
        "Developed a responsive website for a health service provider to showcase their offerings and facilitate user interactions.",
      tools: ["React", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "Sentiment Analyzer",
      github: "",
      external: "https://github.com/amit-99/SE_Project3",
      mainContent:
        "Built a Django-based web app to analyze sentiment from various inputs (text, audio, document, image, or Amazon URL) and output sentiment scores.",
      tools: ["Django", "Python", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "PyQt College Database App",
      github: "",
      external: "https://github.com/Soham1117/elearningApp",
      mainContent:
        "Developed a PyQt application for efficient management of college-related data with a user-friendly interface.",
      tools: ["PyQt", "SQLite", "Python"],
    },
    {
      title: "LLMs in Autonomous Driving - Review Paper",
      github: "",
      external:
        "https://drive.google.com/file/d/1RJWveXh4rcnqOPIw0vvrVx2yKVOpdWuZ/view?usp=sharing",
      mainContent:
        "Authored a review paper exploring the integration of Large Language Models (LLMs) in Autonomous Driving Systems, analyzing advancements in planning, perception, generation, and question-answering.",
      tools: [],
    },
    {
      title: "TaxiCab - Uber Clone",
      github: "",
      external: "",
      mainContent:
        "Created a full-stack Uber clone featuring geolocation and Google Maps API integration to calculate routes and arrival times.",
      tools: ["Java", "MySQL", "Google Maps API"],
    },

    {
      title: "Black Friday Sales Analysis",
      github: "",
      external:
        "https://drive.google.com/file/d/1fBtGXYDB9e8NLfQ_RkvL4LPjt7n423n4/view?usp=drive_link",
      mainContent:
        "Analyzed sales data, implemented K-means clustering for customer segmentation, and developed an ensemble model outperforming others by 20%.",
      tools: ["Python", "Scikit", "Matplotlib", "NumPy", "Pandas"],
    },
    {
      title: "Time Warp Explorer Mobile App Design",
      github: "",
      external:
        "https://www.figma.com/design/mY3YaseXiULu6iLtEUf7rd/HCI-High-Fidelity-Prototype?node-id=1-2&t=TAmIIZ4EZpqVsINR-1",
      mainContent:
        "Designed a mobile app concept in Figma for a historic exploration experience that allows users to engage with ancient monuments and personalize their trips.",
      tools: ["Figma, Adobe Photoshop"],
    },
  ];

  const visibleProjects = showMore ? projects : projects.slice(0, 6);

  return (
    <div
      ref={componentRef}
      className={`flex flex-col gap-10 items-start justify-start lg:items-start lg:justify-center 
      lg:mx-[13%] lg:py-48 lg:px-0 p-8 mt-40 lg:mt-0 min-h-[100vh] font-poppins text-[#7A9BFF] transition-all duration-1000 ease-in-out 
      ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
    >
      <div className="lg:ml-[25%]">
        <SectionHeading heading={"Other Noteworthy Projects"} length={80} />
      </div>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5 w-[100%]`}
      >
        {visibleProjects.map((project) => (
          <ProjectO key={project.title} project={project} />
        ))}
      </div>
      <div className="w-full flex justify-center">
        <button
          className={`border-2 border-indigo-300 text-indigo-200 font-spacemono rounded-md p-2 pl-3 pr-3  
                    hover:shadow-[4px_4px_0px_rgb(129,40,217)] hover:translate-y-[-3px] hover:translate-x-[-3px] 
                    hover:border-[rgbrgb(129,40,217)] transition-all duration-400 ease-in-out ${
                      projects.length > 6 && isLoaded
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-5 opacity-0"
                    } `}
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default OtherProjects;
