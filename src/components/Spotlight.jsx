import { useState, useEffect } from "react";

const Spotlight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed rounded-full bg-indigo-700 bg-opacity-10 pointer-events-none z-10 w-[400px] h-[400px]"
      style={{
        left: `${mousePosition.x - 200}px`,
        top: `${mousePosition.y - 200}px`,
        filter: "blur(80px)",
        transition: "0.01s ease",
      }}
    ></div>
  );
};

export default Spotlight;
