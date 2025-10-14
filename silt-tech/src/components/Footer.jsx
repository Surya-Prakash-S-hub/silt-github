export const Footer = () => {
  return (
    <>
      <footer>
        <div className="wrapFooter">
          <div className="companyContacts">
            <div className="contactDetails">
              <div className="companyAddrs">
                <div className="name">silt tech engineers private limited</div>
                <div className="locations">
                  <div className="address">
                    <div className="locationIcon">
                      <ion-icon name="location-outline"></ion-icon>
                    </div>
                    No 29, First Floor, Elango Street, Kadaperi, Maduranthakam,
                    chengalpattu - 603306
                  </div>
                </div>
              </div>
              <div className="locationPointerIcon"><ion-icon name="location-outline"></ion-icon></div>
            </div>
            <div className="activeLink">
              <div className="socialAdrs">
                <ul>
                  <li>
                    <a href="https://wa.me/919876543210" target="_blank">
                      <ion-icon name="logo-whatsapp"></ion-icon>
                    </a>
                  </li>
                  <li>
                    <a href="#facebook">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                  </li>
                  <li>
                    <a href="#twitter">
                      <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:youremail@example.com">
                      <ion-icon name="mail-outline"></ion-icon>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="returnLink">
                <div className="navLinks">
                  <ul>
                    <li>
                      <a href="#About">about</a>
                    </li>
                    <li>
                      <a href="#WeDeliver">we provide</a>
                    </li>
                    <li>
                      <a href="#OurMission">mission</a>
                    </li>
                    <li>
                      <a href="#ContactUs">contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="contactPointerIcon"><ion-icon name="link-outline"></ion-icon></div>
            </div>
          </div>
          <div className="copyrights">&copy; all rights reserved</div>
        </div>
      </footer>               
    </>
  );
};
