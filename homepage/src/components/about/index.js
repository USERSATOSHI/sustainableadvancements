import "./a.css";
import "../default/a.css";
import aboutlogo from "../../assets/about.jpg";
export default function About() {
    return (
        <div className="about hidden" id="about">
            <div className="aimg">
                <img src={aboutlogo} alt="img" />
            </div>
            <div className="acontent">
                <h1 className="aheads">About Us</h1>
                <p>Sustainable Advancements broadly aims to promote the 5Ps of the
                Sustainable Development Goals (SDGs) or the Global Goals, viz.
                people, planet, prosperity, peace and partnerships .
                </p>
                <p className="hideonmobile">
                This is done through a two-pronged approach - Advocacy and
                Implementation that aids in bridging the gap between ideas and
                actions, communities and businesses, India and rest of the
                world, thus bringing about holistic development.
                </p>
            </div>
        </div>
    );
}
