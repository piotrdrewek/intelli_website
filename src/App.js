import './App.css';
import Home from './components/home';
import Services from './components/services';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Navbar from './components/navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Routes>
            
            <Route index element={<Home />}/>
            <Route path="/services" element={<Services />}/>
            <Route path="/about"  element={<About />}/>
            <Route path="/contact"  element={<Contact />}/>
          </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
