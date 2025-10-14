export const AboutPage = () => {
  //Concepts of the Company
  const aboutDetails = [
    {
      head: "System Solutions",
      descp:
        " We specialize in system design, consultation, installation, and maintenance for commercial and industrial projects.",
    },
    {
      head: "Expert Team",
      descp:
        " With a team of experienced professionals, we deliver high-quality engineering services tailored to client needs.",
    },
    {
      head: "Turnkey Solutions",
      descp:
        " Our turnkey solutions ensure efficiency, reliability, and long-term performance.",
    },
    {
      head: "Our Commitment",
      descp:
        "We are committed to excellence, innovation, and building lasting client relationships.",
    },
  ];
  return (
    <>
      <section id="About">
        <div className="wrapAboutPage">
          <div className="aboutcontent">
            <h1>
              About <span>us</span>
            </h1>
            <div className="abtcontentmain">
              <div className="textcontent">
                <div
                  className="point1"
                  data-aos="slide-right"
                  data-aos-easing="ease-out-back"
                  data-aos-duration="1200"
                >
                  <strong>SILT TECH ENGINEERS PVT. LTD.</strong>
                  <br /> <span>We provide professional MEP consulting and contracting
                  services.</span>
                </div>
                <div className="mjrConcept">
                  {aboutDetails.map((about, index) => {
                    return (
                      <div
                        className={`intabt point${index + 2}`}
                        key={index}
                        data-aos="fade-down"
                        data-aos-duration="400"
                        data-aos-easing="ease-in"
                        data-aos-delay={(index + 1) * 200}
                      >
                        <div className="pointerIcon">
                          <span> {index + 1}. </span>
                        </div>
                        <div className="secondTopic">{about.head}</div>
                        <p>{about.descp}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                className="imgContent"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-ease="ease"
                data-aos-delay="500"
              >
                <div className="imgImg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
