import { useState, useRef, useEffect } from "react";

const NavLinks = () => {
  const [rect, setRect] = useState({ width: 0, left: 0 });
  const [selectedRect, setSelectedRect] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeItem, setActiveItem] = useState("home");
  const containerRef = useRef(null);

  const navItems = [
    { id: "home", label: "01. Home" },
    { id: "about", label: "02. About" },
    { id: "work", label: "03. Work" },
    { id: "projects", label: "04. Projects" },
    { id: "contact", label: "05. Contact" },
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveItem(entry.target.id);
        }
      });
    }, options);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) observer.unobserve(element);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const selectedElement = document.querySelector(
        `[data-id="${activeItem}"]`
      );
      if (selectedElement) {
        const itemRect = selectedElement.getBoundingClientRect();
        const newRect = {
          width: itemRect.width,
          left: itemRect.left - containerRect.left,
        };
        setSelectedRect(newRect);
        setRect(newRect);
      }
    }
  }, [activeItem]);

  const handleMouseEnter = (event, index) => {
    const itemRect = event.currentTarget.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    setHoveredItem(index);
    setRect({
      width: itemRect.width + 18,
      left: itemRect.left - containerRect.left - 9,
    });
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    if (selectedRect) {
      setRect(selectedRect);
    }
  };

  const scrollToSection = (elementId) => {
    document.getElementById(elementId).scrollIntoView({ behavior: "smooth" });
  };

  const handleClick = (event, id) => {
    const itemRect = event.currentTarget.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    const newRect = {
      width: itemRect.width,
      left: itemRect.left - containerRect.left,
    };
    setSelectedRect(newRect);
    setRect(newRect);
    setActiveItem(id);
    scrollToSection(id);
  };

  return (
    <div
      className="relative flex items-center justify-center text-[#051b2e] z-10"
      ref={containerRef}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute bg-indigo-700 transition-all duration-300 ease-in-out"
        style={{
          left: rect.left,
          width: rect.width,
          height: "60%",
        }}
      />

      <div className="flex flex-row gap-5 items-center">
        {navItems.map((item, index) => (
          <div
            key={item.id}
            data-id={item.id}
            className={`relative px-6 py-3 transition-colors duration-300 font-spacemono font-medium cursor-pointer text-nowrap ${
              activeItem === item.id
                ? hoveredItem === index || hoveredItem === null
                  ? "text-[#f7fbff]"
                  : "text-indigo-400/60"
                : hoveredItem === index
                ? "text-[#f7fbff]"
                : "text-indigo-100/60 hover:text-[#f7fbff]"
            }`}
            onMouseEnter={(e) => handleMouseEnter(e, index)}
            onClick={(e) => handleClick(e, item.id)}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavLinks;
