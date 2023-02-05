import "./a.css";
import "../default/a.css";
export default function Sidebar ()
{ 
    function toggle() {
        const side = document.getElementById("side");
        side.classList.toggle("activeside");
    }
    return (
        <div className="sidebar" id="side">
            <div className="closebtn" onClick={toggle}>
                <i className="fa-solid fa-xmark"></i>
            </div>
            <div className="sidebar__links">
                <a className="link" href="#home" onClick={toggle}>
                    Home
                </a>
                <a className="link" href="#about" onClick={toggle}>
                    About
                </a>
                <a className="link" href="#gallery" onClick={toggle}>
                    Gallery
                </a>
                <a className="link" href="#contact" onClick={toggle}>
                    Contact
                </a>
            </div>
        </div>
    );
}