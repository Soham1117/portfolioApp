import { useState, useEffect } from "react";

const RandomGradient = () => {
  const [gradient, setGradient] = useState("");

  const generateRandomGradient = () => {
    // Generate a random angle
    const angle = Math.floor(Math.random() * 360);

    // Generate random violet and black shades
    const randomViolet = `#${Math.floor(Math.random() * 56 + 200).toString(
      16
    )}00ff`;
    const randomBlack = `#${Math.floor(Math.random() * 16)
      .toString(16)
      .padStart(2, "0")}${Math.floor(Math.random() * 16)
      .toString(16)
      .padStart(2, "0")}${Math.floor(Math.random() * 16)
      .toString(16)
      .padStart(2, "0")}`;

    // Construct the gradient
    return `linear-gradient(${angle}deg, ${randomBlack}, ${randomViolet})`;
  };

  useEffect(() => {
    // Set initial gradient
    setGradient(generateRandomGradient());
  }, []);

  const handleGradientChange = () => {
    setGradient(generateRandomGradient());
  };

  return (
    <div
      className="gradient"
      style={{
        background: gradient,
      }}
    >
      <button
        onClick={handleGradientChange}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          padding: "10px 20px",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Randomize Gradient
      </button>
    </div>
  );
};

export default RandomGradient;
