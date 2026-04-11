import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home.jsx";
import Resume from "./pages/Resume.jsx";
import Projects from "./pages/Projects.jsx";
import Education from "./pages/Education.jsx";
import Contact from "./pages/Contact.jsx";

import "./styles/layout.css";
import {Route, Routes} from "react-router-dom";
import { useLocation } from "react-router-dom";

function App() {
    const location = useLocation();

    return (
        <div className={`app-wrapper route-${location.pathname.replace("/", "")}`}>

            <Navbar />

            <main className="page-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}

export default App;