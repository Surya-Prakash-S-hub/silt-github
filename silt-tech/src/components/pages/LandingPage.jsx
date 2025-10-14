import { Button } from "./QuickBtn";
import ShootingStarCanvas from "./ShootingStar";

export const LandingPage = () => {
  const classThis = [
    { class: "imgSlot1 frameCard" },
    { class: "imgSlot2 frameCard" },
    { class: "imgSlot3 frameCard" },
    { class: "imgSlot4 frameCard" },
    { class: "imgSlot5 frameCard" },
    { class: "imgSlot6 frameCard" },
  ];
  return (
    <>
      <section id="HomeMain">
        <div className="landing-page">
          <div className="wraplandingpage">
            <div className="maincontent">
              <div className="slot1">
                <div className="description">
                  <h1 data-aos="fade-right" data-aos-duration="600">
                    Your Trusted Partner for Complete <br />{" "}
                    <span>HVAC & MEP Solutions</span>
                  </h1>
                  <p>delivers end-to-end engineering services</p>
                  <Button value={"contact our team"} />
                </div>
              </div>
              <div className="slot2">
                {classThis.map((value, index) => {
                  return (
                    <div
                      key={index}
                      className={value.class}
                      data-aos="zoom-in"
                      data-aos-easing="ease-in-out"
                      data-aos-duration="700"
                      data-aos-delay={(index + 1) * 200}
                    ></div>
                  );
                })}
              </div>
            </div>
            <div className="canvaDesign">
              <ShootingStarCanvas />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
