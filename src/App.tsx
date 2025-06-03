import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./index.css";

function App() {
    return (
        <>
            <div className="bg-[#faf7f2]">
                <Navbar />
                <Header />
                <Skills />
                <Education />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </>
    );
}

export default App;
