import React, { useState, useRef, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const NavLinksVertical = ({ onClose }) => {
  const [rect, setRect] = useState({ height: 0, top: 0 });
  const [selectedRect, setSelectedRect] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const containerRef = useRef(null);
  const itemRefs = useRef({});

  const navItems = [
    { id: "home", label: "01. Home" },
    { id: "about", label: "02. About" },
    { id: "work", label: "03. Work" },
    { id: "projects", label: "04. Projects" },
    { id: "contact", label: "05. Contact" },
  ];

  // Initialize refs
  useEffect(() => {
    navItems.forEach((item) => {
      itemRefs.current[item.id] =
        itemRefs.current[item.id] || React.createRef();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Set initial active item based on scroll position
  useEffect(() => {
    const checkInitialPosition = () => {
      const windowHeight = window.innerHeight;
      let closestSection = null;
      let minDistance = Infinity;

      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          if (distance < minDistance && rect.top <= windowHeight / 2) {
            minDistance = distance;
            closestSection = item.id;
          }
        }
      });

      // Default to 'home' if no section is found or if we're at the top
      setActiveItem(closestSection || "home");
    };

    checkInitialPosition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Initialize rectangle position
  useEffect(() => {
    if (containerRef.current && !isInitialized && activeItem) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const activeElement = itemRefs.current[activeItem]?.current;

      if (activeElement) {
        const itemRect = activeElement.getBoundingClientRect();
        const initialRect = {
          height: itemRect.height,
          top: itemRect.top - containerRect.top,
        };
        setRect(initialRect);
        setSelectedRect(initialRect);
        setIsInitialized(true);
      }
    }
  }, [isInitialized, activeItem]);

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
          updateRectPosition(entry.target.id);
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

  const updateRectPosition = (id) => {
    if (containerRef.current && itemRefs.current[id]?.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const itemRect = itemRefs.current[id].current.getBoundingClientRect();
      const newRect = {
        height: itemRect.height,
        top: itemRect.top - containerRect.top,
      };
      setSelectedRect(newRect);
      setRect(newRect);
    }
  };

  const handleMouseEnter = (id, index) => {
    setHoveredItem(index);
    if (itemRefs.current[id]?.current && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const itemRect = itemRefs.current[id].current.getBoundingClientRect();
      setRect({
        height: itemRect.height + 12,
        top: itemRect.top - containerRect.top - 6,
      });
    }
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    if (selectedRect) {
      setRect(selectedRect);
    }
  };

  const handleClick = (id) => {
    updateRectPosition(id);
    setActiveItem(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    if (onClose) {
      onClose();
    }
  };

  return (
    <div
      className="relative flex flex-col items-start w-full h-svh pt-6 p-5 gap-6 bg-indigo-900 bg-opacity-40 backdrop-blur-lg"
      ref={containerRef}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute left-0 w-full bg-indigo-700 transition-all duration-300 ease-in-out"
        style={{
          top: `${rect.top}px`,
          height: `${rect.height}px`,
        }}
      />

      {navItems.map((item, index) => (
        <div
          key={item.id}
          ref={itemRefs.current[item.id]}
          data-id={item.id}
          className={`relative w-full transition-colors duration-300 cursor-pointer
            ${
              activeItem === item.id
                ? hoveredItem === index || hoveredItem === null
                  ? "text-[#f7fbff]"
                  : "text-indigo-400/60"
                : hoveredItem === index
                ? "text-[#f7fbff]"
                : "text-indigo-100/60 hover:text-[#f7fbff]"
            }`}
          onMouseEnter={() => handleMouseEnter(item.id, index)}
          onClick={() => handleClick(item.id)}
        >
          <div className="w-full px-6 py-4 text-left font-spacemono font-medium">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavLinksVertical;
