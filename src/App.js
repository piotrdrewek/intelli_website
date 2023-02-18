import "./App.css";
import Home from "./components/home";
import IndustryServices from "./components/industryServices";
import HomeServices from "./components/homeServices";
import About from "./components/about";
import Contact from "./components/contact";
import Career from "./components/career";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/industryServices" element={<IndustryServices />} />
            <Route path="/homeServices" element={<HomeServices />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<Career />} />
          </Routes>
          {/* <Navbar /> */}
          {/* <Footer /> */}
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
