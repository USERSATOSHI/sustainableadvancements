import logo from "../../assets/logo.png";
import "../default/a.css";
import "./a.css";
export default function Navbar ()
{
    

    function toggle ()
    {
        const side = document.getElementById("side");
        side.classList.toggle( "activeside" );
    }

    return (
        <div className="navbar">
            <a href="#home" className="navbar__logo">
                <img
                    src={logo}
                    alt="logo"
                />
            </a>
            <div className="navbar__links">
                <a className="link" href="#about">
                    About
                </a>
                <a className="link" href="#gallery">
                    Gallery
                </a>
                <a className="link" href="#contact">
                    Contact
                </a>
            </div>
            <div className="sidebtn" id="sbtn" onClick={toggle}>
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>
    );
}
