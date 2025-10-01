import { useEffect, useState } from "react";

export const Navigation = () => {
  const [isScrollMode, setIsScrollMode] = useState(false);

  // Add scroll event listener on mount and clean up on unmount
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrollMode(true);
      } else {
        setIsScrollMode(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <>
      <nav className={isScrollMode ? "onScrollMode" : ""}>
        <div className="links">
          <div className="homelink routeLink">
            <a href="/">
              <span className="bgImg"></span>
              <div className="textframe">
                <span>SILT TECH</span> ENGINEERS Pvt. Ltd.
              </div>
            </a>
          </div>
          <div className="sidelink routeLink">
            <ul>
              <li>
                <a href="#">contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
