import React, { useContext } from "react";
import Typewriter from "./Typewriter";
import { FastTypeContext } from "../contexts/fastType";

export const SectionUsage = ({ exampleCommand }) => {
  const { isfastType } = useContext(FastTypeContext);
  return (
    <div className="mt-8">
      <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Usage
      </h1>
      <div className="bg-gray-900 border-l-[15px] dark:bg-gray-800 border-blue-700 h-[60px] rounded-md flex items-center ">
        <h3 className="text-white pl-4 text-xl font-semibold">
          <Typewriter text={exampleCommand} delay={isfastType ? 30 : 80} />
        </h3>
      </div>
    </div>
  );
};
