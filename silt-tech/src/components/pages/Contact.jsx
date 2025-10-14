export const ContactPage = () => {
  return (
    <>
      <section id="ContactUs">
        <div className="handGesture"></div>
        <div className="wrapContactDetails">
          <div className="mainContactScreen">
            <h1>
              Let’s <span> Connect </span>
            </h1>
            <div className="contactContainer">
              <div className="firstFrame">
                <div className="contactTagline">
                    <p data-aos="slide-right" data-aos-delay="200" >Need HVAC Help?</p>
                    <h1 data-aos="flip-down" data-aos-delay="1000" data-aos-easing="ease-in-out-quart" data-aos-duration="700" >We're Here</h1>
                </div>
              </div>
              <div className="secondFrame">
                <form>
                  <div className="labelpin">
                    <input
                      type="text"
                      name="fullname"
                      id="name"
                      pattern="^[A-Za-z\s]{2,50}$"
                      title="Name should be 2-50 letters"
                      required
                      autoComplete="true"
                    />
                    <div className="label">name</div>
                  </div>
                  <div className="labelpin">
                    <input
                      type="text"
                      name="mailid"
                      id="mail"
                      pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                      title="Please enter a valid email address"
                      required
                      autoComplete="true"
                    />
                    <div className="label">email</div>
                  </div>
                  {/* <div className="labelpin">
                    <input
                      type="tel"
                      name="MobileNum"
                      id="phone"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      inputMode="numeric"
                      title="Please enter a 10-digit phone number"
                      placeholder="Phone (option)"
                      autoComplete="true"
                    />
                  </div> */}
                  <div className="labelpin2">
                    <textarea
                      name="query"
                      id="message"
                      pattern=".{10,500}"
                      title="Query should be 10-500 characters"
                      required
                    ></textarea>
                    <div className="label">Query</div>
                  </div>
                  <div className="submitBtn">
                    <button type="submit">send</button>
                  </div>
                <div className="formOutline"></div>
                <div className="formSemiLine"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
