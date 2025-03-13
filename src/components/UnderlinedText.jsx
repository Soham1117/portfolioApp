import PropTypes from "prop-types";

const UnderlinedText = ({ children, url }) => {
  return (
    <span className="relative inline-block group cursor-pointer">
      <span
        className="relative text-indigo-300"
        onClick={() => window.open(url, "_blank")}
      >
        {children}
      </span>
      <span
        className="
          absolute left-0 bottom-0 
          w-0 h-[0.5px] bg-indigo-300 
          group-hover:w-full 
          transition-all duration-500 ease-out
        "
        style={{ transform: "translateY(100%)" }}
      ></span>
    </span>
  );
};

UnderlinedText.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
};

export default UnderlinedText;
