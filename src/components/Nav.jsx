import { useContext } from "react";
import { Toggle } from "./Toggle";
import { DarkModeContext } from "../contexts/darkMode";
import { FastTypeContext } from "../contexts/fastType";

export const Nav = () => {
  const { isfastType, setIsFastType } = useContext(FastTypeContext);
  const { isDarkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between justify-center items-center">
      <Toggle
        texto={"Fast type speed"}
        isChecked={isfastType}
        setChecked={setIsFastType}
      />
      <Toggle
        texto={"Dark Mode"}
        isChecked={isDarkMode}
        setChecked={setDarkMode}
      />
    </div>
  );
};
