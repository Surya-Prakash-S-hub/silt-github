import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const [isScrollMode, setIsScrollMode] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuBtn, setMenuBtn] = useState(false);

  const makeMenuActive = () => {
    setMenuBtn((preValue) => !preValue);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollMode(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);
  const NavLinks = [
    { to: "About", name: "about" },
    { to: "WeDeliver", name: "we provide" },
    { to: "OurMission", name: "mission" },
    { to: "ContactUs", name: "contact" },
  ];

  return (
    <nav className={isScrollMode ? "onScrollMode" : ""}>
      <div className="links">
        <div className="homelink routeLink ">
          <NavLink to="/" className="a">
            <span className="bgImg"></span>
            <div
              className="textframe"
              data-aos="fade-down"
              data-aos-duration="500"
              data-aos-easing="ease-in-sine"
            >
              <span>SILT TECH</span> ENGINEERS Pvt. Ltd.
            </div>
          </NavLink>
        </div>
        <div className="sidelink routeLink">
          <div className="menuBarContent" onClick={makeMenuActive} >
            <div className={menuBtn ? "barSet activeMenuBtn" : "barSet"}>
              <div className="lineOne bar"></div>
              <div className="lineTwo bar"></div>
              <div className="lineThree bar"></div>
            </div>
          </div>
          <div className={menuBtn ? "menu show-menu" : "menu"}>
            <ul>
              {NavLinks.map((value, index) => {
                return (
                  <li key={index}>
                    <a
                      href={`#${value.to}`}
                      className={
                        activeSection === `${value.to}` ? "active" : ""
                      }
                      onClick={makeMenuActive}
                      style={{ "--delayLink": `${index + 1}s` }}
                    >
                      {value.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
