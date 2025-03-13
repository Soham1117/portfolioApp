import PropTypes from "prop-types";

const SectionHeading = ({ heading }) => {
  return (
    <div>
      <div className="flex flex-row justify-center items-center lg:gap-8 gap-3 z-[30]">
        <div className="hidden lg:flex w-[2px] h-16 bg-white z-[30]"></div>
        <h2 className="text-[#A1C4FD] text-4xl lg:text-6xl font-custom z-[30]">
          {" "}
          {heading}
        </h2>
        <div
          className={`flex z-[30] lg:hidden w-28 lg:w-${length} h-[0.5px] bg-indigo-100`}
        ></div>
      </div>
    </div>
  );
};

SectionHeading.propTypes = {
  heading: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
};

export default SectionHeading;
