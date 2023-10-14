import { createContext, useState } from "react";

export const ResponseCommandsContext = createContext();

export function ResponseCommandProvider({ children }) {
  const [data, setData] = useState([]);
  return (
    <ResponseCommandsContext.Provider value={{ data, setData }}>
      {children}
    </ResponseCommandsContext.Provider>
  );
}
