import { Button } from "../QuickBtn";
import ShootingStarCanvas from "../ShootingStar";

export const LandingPage = () => {
  return (
    <>
      <div className="landing-page">
        <div className="wraplandingpage">
          <div className="maincontent">
            <div className="slot1">
              <div className="description">
                <h1>
                  Your Trusted Partner for Complete <br />{" "}
                  <span>HVAC & MEP Solutions</span>
                </h1>
                <p>delivers end-to-end engineering services</p>
                <Button value={"contact our team"} />
              </div>
            </div>
            <div className="slot2">
              <div className="imgSlot1 frameCard"></div>
              <div className="imgSlot2 frameCard"></div>
              <div className="imgSlot3 frameCard"></div>
              <div className="imgSlot4 frameCard"></div>
              <div className="imgSlot5 frameCard"></div>
              <div className="imgSlot6 frameCard"></div>
            </div>
          </div>
          <div className="canvaDesign">
            <ShootingStarCanvas />
          </div>
        </div>
      </div>
    </>
  );
};
