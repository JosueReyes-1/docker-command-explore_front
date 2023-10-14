import React from "react";

export const Header = () => {
  return (
    <div>
      <h1 className="mt-8 mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Docker <span className="text-blue-700">Command</span> Explorer
      </h1>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        Find the right command you need without digging through the web.
      </p>
    </div>
  );
};
