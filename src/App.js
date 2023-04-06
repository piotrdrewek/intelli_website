import "./App.css";
import Home from "./components/home";
import IndustryServices from "./components/industryServices";
import HomeServices from "./components/homeServices";
import About from "./components/about";
import Contact from "./components/contact";
import Career from "./components/career";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { useEffect } from "react";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
});

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
function isMobile(width) {
  if (width > 1024) return false;
  else if (width <= 1024) return true;
}

function App() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [mobile, setMobile] = useState(isMobile(windowSize.innerWidth));
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  useEffect(() => {
    setMobile(isMobile(windowSize.innerWidth));
  }, [windowSize]);

  useEffect(() => {}, [mobile]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {/* <Router basename={window.location.pathname || ""}> */}
        <Router>
          <Routes>
            {/* <Route index element={<Home />} /> */}
            <Route exact path="/" element={<Home isMobile={mobile} />} />
            <Route
              path="/industryServices"
              element={<IndustryServices isMobile={mobile} />}
            />
            <Route
              path="/homeServices"
              element={<HomeServices isMobile={mobile} />}
            />
            <Route path="/about" element={<About isMobile={mobile} />} />
            <Route path="/contact" element={<Contact isMobile={mobile} />} />
            <Route path="/career" element={<Career isMobile={mobile} />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
