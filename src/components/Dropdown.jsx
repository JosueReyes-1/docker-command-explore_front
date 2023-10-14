import { useState } from "react";

export const Dropdown = ({ listSelect, setListSelect, data, itemSelect }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const changeCommand = (event) => {
    setListSelect(event);
    toggleDropdown();
  };
  return (
    <div className="relative inline-block text-left w-full mt-5">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-gray-600 font-bold w-full bg-white border-2  focus:ring-4 focus:outline-none focus:ring-transparent rounded-md text-base px-3 py-2.5 lg:cursor-pointer inline-flex justify-between items-center dark:focus:ring-blue-800"
        type="button"
        onClick={toggleDropdown}
      >
        <span className="text-left">{listSelect}</span>
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div
          id="dropdown"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-100 overflow-hidden"
          style={{ maxHeight: "200px", overflowY: "auto" }}
        >
          <ul
            className="py-2 text-sm text-gray-700 "
            aria-labelledby="dropdownDefaultButton"
          >
            {data.map((command, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() =>
                    changeCommand(
                      itemSelect == "Command"
                        ? command.Command
                        : command.Scenario
                    )
                  }
                >
                  {itemSelect == "Command" ? command.Command : command.Scenario}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
