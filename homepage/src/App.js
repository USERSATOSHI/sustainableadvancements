import "./App.css";
import About from "./components/about/index.js";
import Contact from "./components/contact/index.js";
import Gallary from "./components/gallery/index.js";
import Landing from "./components/landing/index.js";
import Landing2 from "./components/landing2/index.js";
import Navbar from "./components/navbar/index.js";
import Sidebar from "./components/sidebar/index.js";
function App() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((x) => {
            if (x.isIntersecting) {
                x.target.classList.add("show");
            }
        });
    });
    function render() {
        const hiddenElements = document.querySelectorAll(".hidden");
        console.log({ hiddenElements });
        hiddenElements.forEach((x) => observer.observe(x));
    }
    return (
        <div className="App" onLoad={render}>
            <Navbar />
            <Sidebar />
            <Landing />
        <About />
        <Landing2 />
            <Gallary />
            <Contact />
        </div>
    );
}

export default App;
