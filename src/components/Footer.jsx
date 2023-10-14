import { useContext } from "react";
import github_icon from "../img/github_icon.svg";
import github_icon_dark from "../img/github_icon_dark.svg";
import { DarkModeContext } from "../contexts/darkMode";

export const Footer = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <footer className="bg-white rounded-t-lg  dark:bg-gray-900">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center">
        <ul className=" flex flex-wrap items-center justify-center mt-3 text-base font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <span>Made with ❤ by </span>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              josueReyes-1
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Twitter
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Donate
            </a>
          </li>
        </ul>
        <img
          className="w-10 h-10 m-2"
          src={isDarkMode ? github_icon_dark : github_icon}
          alt=""
        />
      </div>
    </footer>
  );
};
