import { useContext } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Options } from "./components/Options";
import { FastTypeProvider } from "./contexts/fastType";
import { ResponseCommandProvider } from "./contexts/fetchData";
import { DarkModeContext } from "./contexts/darkMode";

function App() {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <div className={isDarkMode && "dark"}>
      <ResponseCommandProvider>
        <FastTypeProvider>
          <div className="dark:bg-gray-900">
            <div className="w-[80%] min-h-[90vh] flex flex-col m-auto">
              <Nav />
              <Header />
              <Options />
            </div>
            <Footer />
          </div>
        </FastTypeProvider>
      </ResponseCommandProvider>
    </div>
  );
}

export default App;
