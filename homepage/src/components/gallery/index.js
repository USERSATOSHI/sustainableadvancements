import "./a.css";
import "../default/a.css";
import bg from "../../assets/bg.jpg";
import logo from "../../assets/logo.avif";
import * as React from "react";

const delay = 2500;
const imgs = [logo, bg];
export default function Gallary() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === imgs.length - 1 ? 0 : prevIndex + 1,
                ),
            delay,
        );

        return () => {
            resetTimeout();
        };
    }, [index]);
    

    return (
        <div className="gallery hidden" id="gallery">
            <h1 className="head">Gallery</h1>
            <div className="slideshow">
                <div
                    className="slideshowSlider"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {imgs.map((img, index) => (
                        <img
                            className="slide"
                            key={index}
                            src={img}
                            alt={index}
                        />
                    ))}
                </div>

                <div className="slideshowDots">
                    {imgs.map((_, idx) => (
                        <div
                            key={idx}
                            className={`slideshowDot${
                                index === idx ? " active" : ""
                            }`}
                            onClick={() => {
                                setIndex(idx);
                            }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}
