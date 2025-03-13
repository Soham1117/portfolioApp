const InteractiveDottedBackground = () => {
  return (
    <div>
      <div className="lg:hidden fixed top-0 left-0 w-full h-full overflow-hidden z-[-1] bg-dotted"></div>
      <div className="fixed top-[25%] left-[20%] w-[20%] h-[50%] overflow-hidden bg-white rounded-full filter blur-3xl mix-blend-overlay pointer-events-none"></div>
      <div className="fixed top-[25%] left-[60%] w-[20%] h-[50%] overflow-hidden bg-white rounded-full filter blur-3xl mix-blend-overlay pointer-events-none"></div>

      <div className="bg-gradient-to-b from-[#030117] to-[#060325] hidden lg:fixed top-0 left-0 w-full h-full overflow-hidden z-[-1] lg:block">
        <div className="fixed top-0 left-[13%] h-full w-[1px] bg-transparent border-dotted border-white/10 border-l z-[5]"></div>
        <div className="fixed top-0 left-[31.5%] h-full w-[1px] bg-transparent border-dotted border-white/10 border-l z-[5]"></div>
        <div className="fixed top-0 left-[50%] h-full w-[1px] bg-transparent border-dotted border-white/10 border-l z-[5]"></div>
        <div className="fixed top-0 left-[68.5%] h-full w-[1px] bg-transparent border-dotted border-white/10 border-l z-[5]"></div>
        <div className="fixed top-0 left-[87%] h-full w-[1px] bg-transparent border-dotted border-white/10 border-l z-[5]"></div>
      </div>
    </div>
  );
};

export default InteractiveDottedBackground;
