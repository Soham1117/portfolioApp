import { createContext, useContext, useState, useEffect } from "react";

const LightContext = createContext({ scrollPosition: 0 });
const UseLightIntersection = (elementRef, threshold = 0.5) => {
  const { scrollPosition } = useContext(LightContext);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [lightPosition, setLightPosition] = useState({
    x: 31.5,
    y: scrollPosition,
  });

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const rect = element.getBoundingClientRect();
    const elementTopPercentage =
      (rect.top / document.documentElement.scrollHeight) * 100;
    const elementBottomPercentage =
      (rect.bottom / document.documentElement.scrollHeight) * 100;
    const isInView =
      scrollPosition >= elementTopPercentage &&
      scrollPosition <= elementBottomPercentage;

    setIsIntersecting(isInView);

    if (isInView) {
      setLightPosition({
        x: scrollPosition < elementBottomPercentage - 10 ? 31.5 : 68.5,
        y: scrollPosition,
      });
    }
  }, [scrollPosition, elementRef, threshold]);

  return { isIntersecting, lightPosition };
};

export default UseLightIntersection;
