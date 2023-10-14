import { createContext, useState } from "react";

export const FastTypeContext = createContext();

export function FastTypeProvider({ children }) {
  const [isfastType, setIsFastType] = useState(false);
  return (
    <FastTypeContext.Provider value={{ isfastType, setIsFastType }}>
      {children}
    </FastTypeContext.Provider>
  );
}
