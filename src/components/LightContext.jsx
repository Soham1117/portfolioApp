import { createContext } from "react";

const LightContext = createContext({
  scrollPosition: 0,
  lightPosition: { x: 31.5, y: 0 },
});

export default LightContext;
