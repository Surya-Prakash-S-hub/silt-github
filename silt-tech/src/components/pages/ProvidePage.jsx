// import { SpinningImage } from "./SpinningImg";

import { useState } from "react";

export const PurposePage = () => {
  const [showCard, setShowCard] = useState(false);

  function showHideCard() {
    setShowCard((prevalue) => !prevalue);
  }
  return (
    <>
      <section id="WeDeliver">
        <div className="wrapPurpose">
          <div className="purposeContent">
            <h1>
              Innovating <span>HVAC</span> Every Day.
            </h1>
            <div className="mainpurpose">
              <h3>
                We provide complete solutions for all kinds of HVAC systems and
                products.
              </h3>
              <div className="purposeforpage">
                <div className="flexpurpose">
                  <div className="PpCard" data-aos="flip-right" data-aos-easeing="ease-in-out-sine" data-aos-duration="750" data-aos-delay="100">
                    <div className="imgPpcard"></div>
                    <div className="Pptext">Vrf / vrv outdoor unit</div>
                  </div>
                  <div className="PpCard" data-aos="flip-right" data-aos-easeing="ease-in-out-sine" data-aos-duration="750" data-aos-delay="200">
                    <div className="imgPpcard"></div>
                    <div className="Pptext">hiwall unit</div>
                  </div>
                  <div className="PpCard" data-aos="flip-right" data-aos-easeing="ease-in-out-sine" data-aos-duration="750" data-aos-delay="300">
                    <div className="imgPpcard"></div>
                    <div className="Pptext">cassette unit</div>
                  </div>
                  <div className="PpCard" data-aos="flip-right" data-aos-easeing="ease-in-out-sine" data-aos-duration="750" data-aos-delay="400">
                    <div className="imgPpcard"></div>
                    <div className="Pptext">fcu unit</div>
                  </div>
                  <div className="PpCard" data-aos="flip-right" data-aos-easeing="ease-in-out-sine" data-aos-duration="750" data-aos-delay="500">
                    <div className="imgPpcard"></div>
                    <div className="Pptext">Floor standing unit</div>
                  </div>
                  <div className="PpCard" data-aos="flip-right" data-aos-easeing="ease-in-out-sine" data-aos-duration="750" data-aos-delay="600">
                    <div className="imgPpcard"></div>
                    <div className="Pptext">ductable unit</div>
                  </div>
                  <div className="PpCard" data-aos="flip-right" data-aos-easeing="ease-in-out-sine" data-aos-duration="750" data-aos-delay="700">
                    <div className="imgPpcard"></div>
                    <div className="Pptext">package unit</div>
                  </div>
                  <div className="PpCard" data-aos="flip-right" data-aos-easeing="ease-in-out-sine" data-aos-duration="750" data-aos-delay="800">
                    <div className="imgPpcard"></div>
                    <div className="Pptext">chillers</div>
                  </div>
                  <div className="PpCard" data-aos="flip-right" data-aos-easeing="ease-in-out-sine" data-aos-duration="750" data-aos-delay="750">
                    <div className="imgPpcard"></div>
                    <div className="Pptext">smart ahu</div>
                  </div>
                  <div
                    className="PpCard PpCardBtn"
                    style={{ display: showCard ? "none" : "block" }}
                  >
                    <button onClick={showHideCard}>
                      <span>
                        show <br /> more <br />{" "}
                        <ion-icon name="chevron-forward-outline"></ion-icon>{" "}
                      </span>
                    </button>
                  </div>
                  <div
                    className="PpCard"
                    style={{ display: showCard ? "flex" : "none" }}
                  >
                    <div className="imgPpcard"></div>
                    <div className="Pptext">
                      complete range of cooling towers
                    </div>
                  </div>
                  <div
                    className="PpCard"
                    style={{ display: showCard ? "flex" : "none" }}
                  >
                    <div className="imgPpcard"></div>
                    <div className="Pptext">ec fans</div>
                  </div>
                  <div
                    className="PpCard"
                    style={{ display: showCard ? "flex" : "none" }}
                  >
                    <div className="imgPpcard"></div>
                    <div className="Pptext">precision airconditioners</div>
                  </div>
                  <div
                    className="PpCard"
                    style={{ display: showCard ? "flex" : "none" }}
                  >
                    <div className="imgPpcard"></div>
                    <div className="Pptext">ventilation fans</div>
                  </div>
                  <div
                    className="PpCard"
                    style={{ display: showCard ? "flex" : "none" }}
                  >
                    <div className="imgPpcard"></div>
                    <div className="Pptext">
                      chilled / condensate water pumps
                    </div>
                  </div>
                  <div
                    className="PpCard"
                    style={{ display: showCard ? "flex" : "none" }}
                  >
                    <div className="imgPpcard"></div>
                    <div className="Pptext">
                      hygine solutions uvlamps / hepa filters
                    </div>
                  </div>
                  <div
                    className="PpCard PpCardBtn"
                    style={{ display: showCard ? "block" : "none" }}
                  >
                    <button onClick={showHideCard}>
                      <span>
                        show <br /> less <br />{" "}
                        <ion-icon name="chevron-back-outline"></ion-icon>{" "}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
